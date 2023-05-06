import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { RefreshToken } from 'src/users/entity/refreshToken.entity';
import { User } from 'src/users/entity/user.entity';
import { OAuthDto } from './dto/oauth.dto';

@Injectable()
export class OauthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly authService: AuthService,
  ) {}

  async getAuth({ accessToken }: OAuthDto) {
    console.log(accessToken);
    const response = await this.httpService.axiosRef.get(
      'https://kapi.kakao.com/v2/user/me',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );
    console.log(response.data);
    const user = new User();
    user.id = 1;
    user.password = '1111';
    user.email = 'kakao@gmail.com';
    user.isActive = true;
    return await this.authService.getToken(user);
  }
}
