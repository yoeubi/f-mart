import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OauthModule } from './oauth/oauth.module';
import { AuthModule } from './auth/auth.module';
import * as redisStore from 'cache-manager-ioredis';
import { User } from './users/entity/user.entity';
import { ConfigModule } from '@nestjs/config';
import { RefreshToken } from './users/entity/refreshToken.entity';
import { Verification } from './users/entity/verification.entity';
import { SlidesModule } from './slides/slides.module';
import { CategoriesModule } from './categories/categories.module';
import { MerchandiseModule } from './merchandise/merchandise.module';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 13306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User, RefreshToken, Verification],
      synchronize: true,
    }),
    OauthModule,
    ConfigModule.forRoot(),
    AuthModule,
    SlidesModule,
    CategoriesModule,
    MerchandiseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
