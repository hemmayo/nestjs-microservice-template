import { MongoRepository } from 'typeorm';
import { User } from './user.entity';

export class UserRepository extends MongoRepository<User> {
  getUser() {
    return 'yes';
  }
}
