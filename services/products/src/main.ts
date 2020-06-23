import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import * as config from 'config';

const logger = new Logger('Main');
const redisConfig: any = config.get('redis');
console.log(redisConfig);

// Create the microservice options object
const microservicesOptions = {
  transport: Transport.REDIS,
  options: redisConfig,
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microservicesOptions,
  );

  await app.listen(() => {
    logger.log(`Products microservice connected to ${redisConfig.url}`);
  });
}
bootstrap();
