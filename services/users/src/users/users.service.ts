import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [
    { name: 'User 1', email: 'user1@gmail.com', password: 'password1' },
    { name: 'User 2', email: 'user2@gmail.com', password: 'password2' },
    { name: 'User 3', email: 'user3@gmail.com', password: 'password3' },
  ];

  getUser(email): User {
    // if (!this.users[id]) {
    //   throw new RpcException(new NotFoundException());
    // }

    return this.users.find(user => user.email === email);
  }
}
