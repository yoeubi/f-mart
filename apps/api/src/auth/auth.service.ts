import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  signIn(signInDto: SignInDto) {
    return signInDto;
  }

  signUp(signUpDto: SignUpDto) {
    return signUpDto;
  }
}
