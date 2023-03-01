import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
  async create(user: User) {
    await this.userRepository.save(user);
  }
  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
