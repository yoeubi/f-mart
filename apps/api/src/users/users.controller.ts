import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './entity/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() user: User) {
    this.userService.create(user);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.userService.remove(id);
  }
}
