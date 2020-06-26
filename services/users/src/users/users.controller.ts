import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from '@hemmayo/microservices-api-dto';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @MessagePattern({ service: 'users', cmd: 'createUser' })
  createUser(createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @MessagePattern({ service: 'users', cmd: 'getUserById' })
  getUserById(id: string) {
    return this.usersService.getUserById(id);
  }

  @MessagePattern({ service: 'users', cmd: 'getUserByEmail' })
  getUserByEmail(email: string) {
    return this.usersService.getUserByEmail(email);
  }
}
