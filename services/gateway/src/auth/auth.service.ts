import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { makeRequest } from 'src/utils/make-request';
// import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USERS_SERVICE') private client: ClientProxy,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await makeRequest(
      this.client,
      { service: 'users', cmd: 'getUser' },
      email,
    );

    // if (compareSync(password, user?.password)) {
    //   return user;
    // }

    if (password === user?.password) {
      return user;
    }

    return null;
  }

  async login(user) {
    const payload = { user, sub: user.email };
    delete user.password;

    return {
      user,
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateToken(jwt: string) {
    return this.jwtService.verify(jwt);
  }
}
