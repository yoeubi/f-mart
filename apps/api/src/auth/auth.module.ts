import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { HashingService } from './hasing.service';
import { BcryptService } from './bcrypt.service';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './jwt.config';
import { ConfigModule } from '@nestjs/config';
import { RefreshToken } from 'src/users/entity/refreshToken.entity';
import { Verification } from 'src/users/entity/verification.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, RefreshToken, Verification]),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
