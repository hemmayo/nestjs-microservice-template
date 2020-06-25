import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import MongooseConfigService from './database/database.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
