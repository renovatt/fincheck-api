import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { env } from './shared/config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = parseInt(env.PORT || '5000', 10);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards();
  app.enableCors({
    origin: '*',
  });

  await app.listen(PORT);
}
bootstrap();
