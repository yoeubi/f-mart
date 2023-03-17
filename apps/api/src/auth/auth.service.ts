import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { RefreshToken } from 'src/users/entity/refreshToken.entity';
import { User } from 'src/users/entity/user.entity';
import { Verification } from 'src/users/entity/verification.entity';
import { Repository } from 'typeorm';
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
      throw new UnauthorizedException('User dose not exists');
    }
    // if (!user.isActive) {
    //   throw new UnauthorizedException('User is not active');
    // }
    const isEqual = await this.hashingService.compare(
      signInDto.password,
      user.password,
    );
    if (!isEqual) {
      throw new UnauthorizedException('Password does not match');
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
    // try {
    //   await this.verificationRepository.findOneBy({});
    // } catch (error) {}
  }

  async refresh() {
    // this.refreshTokenRepository.findOneBy({
    //   userId
    // })
    // const token = await this.generateToken(user);
    // const refreshToken = new RefreshToken();
    // refreshToken.token = token.refreshToken;
    // refreshToken.userId = user.id;
    // await this.refreshTokenRepository.upsert(refreshToken, ['userId']);
  }

  async generateToken(user: User) {
    const [accessToken, refreshToken] = await Promise.all([
      this.signToken(user.id, this.jwtConfiguration.accessTokenTtl, {
        email: user.email,
      }),
      this.signToken(user.id, this.jwtConfiguration.refreshTokenTtl),
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
