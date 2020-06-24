import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { HealthController } from './health/health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [UsersModule, TerminusModule, AuthModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
