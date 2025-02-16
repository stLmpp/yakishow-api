import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getEnvVar, getHost, isProd } from './util/env';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from '../package.json';
import { patchClassValidatorMessages } from './config/class-validator-messages';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';

patchClassValidatorMessages();
config();

const PORT = getEnvVar('PORT') ?? getEnvVar('$PORT');
const HOST = getHost();

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  if (!isProd) {
    app.enableCors();
    const options = new DocumentBuilder()
      .setTitle('Yakishow api')
      .setVersion(version)
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('help', app, document);
  }
  await app.listen(PORT, HOST);
}
bootstrap()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log(`Yakishow-api started! on ${HOST} - ${PORT}`);
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.error(error);
  });
