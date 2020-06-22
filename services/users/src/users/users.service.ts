import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser(data) {
    return `Hello user ${data}`;
  }
}
