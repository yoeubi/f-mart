import { Controller, Get } from '@nestjs/common';
import { SlidesService } from './slides.service';

@Controller('slides')
export class SlidesController {
  constructor(private readonly slidesService: SlidesService) {}

  @Get()
  findAll() {
    return this.slidesService.findAll();
  }
}
