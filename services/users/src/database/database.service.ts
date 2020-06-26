import { Injectable } from '@nestjs/common';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import * as config from 'config';

@Injectable()
export default class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: config.get('mongodb.mongoUri'),
      useCreateIndex: true,
      useNewUrlParser: true,
    };
  }
}
