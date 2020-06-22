import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @MessagePattern({ service: 'users', cmd: 'getUser' })
  getUsers(data) {
    return this.usersService.getUser(data);
  }
}
