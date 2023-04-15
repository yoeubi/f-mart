import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions/forbidden.exception';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { RefreshToken } from 'src/users/entity/refreshToken.entity';
import { User } from 'src/users/entity/user.entity';
import { Verification } from 'src/users/entity/verification.entity';
import { Repository } from 'typeorm';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { VerificationDto } from './dto/verification.dto';
import { HashingService } from './hasing.service';
import jwtConfig from './jwt.config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    @InjectRepository(RefreshToken)
    private readonly refreshTokenRepository: Repository<RefreshToken>,
    @InjectRepository(Verification)
    private readonly verificationRepository: Repository<Verification>,
  ) {}
  async signIn(signInDto: SignInDto) {
    const user = await this.usersRepository.findOneBy({
      email: signInDto.email,
    });
    if (!user) {
      throw new BadRequestException('User credential mismatched');
    }
    if (!user.isActive) {
      throw new ForbiddenException('User is not active');
    }
    const isEqual = await this.hashingService.compare(
      signInDto.password,
      user.password,
    );
    if (!isEqual) {
      throw new BadRequestException('User credential mismatched');
    }

    const token = await this.generateToken(user);

    const refreshToken = new RefreshToken();
    refreshToken.token = token.refreshToken;
    refreshToken.userId = user.id;
    await this.refreshTokenRepository.upsert(refreshToken, ['userId']);

    return token;
  }

  async signUp(signUpDto: SignUpDto) {
    try {
      const user = new User();
      user.email = signUpDto.email;
      user.password = await this.hashingService.hash(signUpDto.password);
      const createdUser = await this.usersRepository.save(user);
      const code = randomUUID();
      const verification = new Verification();
      verification.userId = createdUser.id;
      verification.code = code;
      await this.verificationRepository.upsert(verification, ['userId']);
      return {
        code,
      };
    } catch (error) {
      throw error;
    }
  }

  async verification(verificationDto: VerificationDto) {
    const verification = await this.verificationRepository.findOneBy({
      code: verificationDto.code,
    });
    const isExpired = verification.expiredAt < Date.now();
    if (isExpired) {
      throw new BadRequestException('Code is expired');
    }
    const user = await this.usersRepository.save({
      id: verification.userId,
      isActive: true,
    });
    await this.verificationRepository.update(
      { id: verification.id },
      {
        expiredAt: Date.now(),
      },
    );
    const token = await this.generateToken(user);
    return token;
  }

  async refresh(refreshTokenDto: RefreshTokenDto) {
    const refresh = await this.refreshTokenRepository.findOneBy({
      token: refreshTokenDto.refreshToken,
    });
    const isExpired = refresh.expiredAt < Date.now();
    if (isExpired) {
      throw new BadRequestException('Token is expired');
    }
    const user = await this.usersRepository.findOneBy({
      id: refresh.userId,
    });
    const token = await this.generateToken(user);
    await this.refreshTokenRepository.update(
      {
        id: refresh.id,
      },
      {
        token: token.refreshToken,
        expiredAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
      },
    );
    return token;
  }

  async generateToken(user: User) {
    const [accessToken, refreshToken] = await Promise.all([
      this.signToken(user.id, this.jwtConfiguration.accessTokenTtl, {
        email: user.email,
      }),
      randomUUID(),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async signToken<T>(userId: number, expiresIn: number, payload?: T) {
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
        expiresIn,
      },
    );
  }
}
