import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/cache')
  async getCache() {
    const saveTime = await this.cacheManager.get('time');
    if (saveTime) {
      return `saved time: ${saveTime}`;
    }
    const now = new Date().getTime();
    await this.cacheManager.set('time', now);
    return `save new time: ${now}`;
  }
}
