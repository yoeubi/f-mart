import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { OAuthDto } from './dto/oauth.dto';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @Post('kakao')
  async authByKakao(
    @Body() oAuthDto: OAuthDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = await this.oauthService.getAuth(oAuthDto);
    response.cookie('access_token', token.accessToken);
    response.cookie('refresh_token', token.refreshToken);
    return response.status(200);
  }
}
