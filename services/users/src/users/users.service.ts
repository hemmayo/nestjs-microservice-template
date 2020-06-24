import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: object[] = [
    { name: 'User 1', email: 'user1@gmail.com', password: 'password1' },
    { name: 'User 2', email: 'user2@gmail.com', password: 'password2' },
    { name: 'User 3', email: 'user3@gmail.com', password: 'password3' },
  ];

  getUser(id) {
    // if (!this.users[id]) {
    //   throw new RpcException(new NotFoundException());
    // }

    return this.users[id];
  }
}
