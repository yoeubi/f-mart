import { Controller, Get, Param } from '@nestjs/common';
import { MerchandiseService } from './merchandise.service';

@Controller('merchandise')
export class MerchandiseController {
  constructor(private readonly merchandiseService: MerchandiseService) {}

  @Get()
  findAll() {
    return this.merchandiseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.merchandiseService.findOne(+id);
  }
}
