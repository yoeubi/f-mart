import { Controller, Post, Body } from '@nestjs/common';
import { OAuthDto } from './dto/oauth.dto';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @Post('kakao')
  authByKakao(@Body() oAuthDto: OAuthDto) {
    return this.oauthService.getAuth(oAuthDto);
  }
}
