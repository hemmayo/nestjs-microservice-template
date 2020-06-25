import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import * as config from 'config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      ...config.get('mongodb'),
      entities: ['**/*.entity.js'],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
