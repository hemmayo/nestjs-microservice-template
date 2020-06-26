import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { makeRequest } from 'src/utils/make-request';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private client: ClientProxy) {}

  async getAllUsers() {
    const res = await makeRequest(this.client, {
      service: 'users',
      cmd: 'getAllUsers',
    });
    return res;
  }

  async getUserByEmail(email: string) {
    const res = await makeRequest(
      this.client,
      { service: 'users', cmd: 'getUserByEmail' },
      email,
    );
    return res;
  }

  async getUserById(id: string) {
    const res = await makeRequest(
      this.client,
      { service: 'users', cmd: 'getUserById' },
      id,
    );
    return res;
  }
}
