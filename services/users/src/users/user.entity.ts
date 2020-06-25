import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('User')
export class User {
  @ObjectIdColumn() id: ObjectID;
  @Column() email: string;
  @Column() name: string;
  @Column() password: string;
}
