import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { makeRequest } from 'src/utils/make-request';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private client: ClientProxy) {}

  async getUser(id: number) {
    const res = await makeRequest(
      this.client,
      { service: 'users', cmd: 'getUser' },
      id,
    );

    return res;
  }
}
