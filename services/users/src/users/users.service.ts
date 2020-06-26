import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from '@hemmayo/microservices-api-dto';

import { Model } from 'mongoose';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);
    const foundUser = await this.getUserByEmail(createUserDto.email);

    if (!foundUser) {
      return user.save();
    }

    throw new RpcException(
      new ConflictException('This email address has already been used'),
    );
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserById(id): Promise<User> {
    return this.userModel.findById(id);
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }
}
