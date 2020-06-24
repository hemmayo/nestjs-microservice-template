import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { makeRequest } from 'src/utils/make-request';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private client: ClientProxy) {}

  async getUser(email: string) {
    const res = await makeRequest(
      this.client,
      { service: 'users', cmd: 'getUser' },
      email,
    );
    return res;
  }
}
