import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: UserRepository) {}

  getUsers(): User[] {
    return [];
  }

  getUser(email): User {
    // if (!this.users[id]) {
    //   throw new RpcException(new NotFoundException());
    // }

    return this.getUsers().find(user => user.email === email);
  }
}
