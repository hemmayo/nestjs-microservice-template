import { Injectable, Inject, GatewayTimeoutException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private client: ClientProxy) {}

  async getUser(data) {
    try {
      const res = await this.client
        .send({ service: 'users', cmd: 'getUser' }, data)
        .pipe(timeout(5000))
        .toPromise<boolean>();
      return res;
    } catch (e) {
      throw new GatewayTimeoutException(e.message);
    }
  }
}
