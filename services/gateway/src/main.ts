import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const serverConfig: any = config.get('server');
  const logger = new Logger('bootstrap');
  const port = serverConfig.port || 3000;

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
