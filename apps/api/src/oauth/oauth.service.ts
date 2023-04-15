import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { OAuthDto } from './dto/oauth.dto';

@Injectable()
export class OauthService {
  constructor(private readonly httpService: HttpService) {}

  async getAuth({ access_token }: OAuthDto) {
    console.log(access_token);

    const response = await this.httpService.axiosRef.get(
      'https://kapi.kakao.com/v2/user/me',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );
    console.log(response);
  }
}
