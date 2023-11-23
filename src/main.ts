import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { env } from './shared/config/env';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = parseInt(env.PORT || '5000', 10);

  const SWAGGER_TITLE = 'Fincheck API';
  const SWAGGER_DESCRIPTION =
    'Documentação Fincheck API - Desenvolvida para um sistema financeiro.';
  const SWAGGER_PREFIX = '/docs';

  const config = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_PREFIX, app, document, {
    customCssUrl: '/swagger-ui.css',
    customJs: ['/swagger-ui-bundle.js', '/swagger-ui-standalone-preset.js'],
  });

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards();
  app.enableCors({
    origin: '*',
  });

  await app.listen(PORT);
  Logger.log(`🚀 Application is running on: http://localhost:${PORT}`);
}
bootstrap();
