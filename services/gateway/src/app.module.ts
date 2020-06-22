import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { HealthController } from './health/health.controller';
import { TerminusModule } from '@nestjs/terminus';
@Module({
  imports: [UsersModule, TerminusModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
