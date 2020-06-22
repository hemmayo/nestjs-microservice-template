import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  MicroserviceHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';
import { Transport } from '@nestjs/microservices';
import * as config from 'config';
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private microservice: MicroserviceHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    const redisConfig: any = config.get('redis');
    return this.health.check([
      () =>
        this.microservice.pingCheck('redis', {
          transport: Transport.REDIS,
          options: redisConfig,
        }),
    ]);
  }
}
