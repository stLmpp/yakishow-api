import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getEnvVar, getHost, isProd } from './util/env';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from '../package.json';
import { patchClassValidatorMessages } from './config/class-validator-messages';
import { ValidationPipe } from '@nestjs/common';

patchClassValidatorMessages();

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
      .setContact(
        'Guilherme Pais',
        'https://github.com/stLmpp',
        'gui.stlmpp@hotmail.com'
      )
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('help', app, document);
  }
  await app.listen(PORT, HOST);
}
bootstrap()
  .then(() => {
    // tslint:disable-next-line:no-console
    console.log(`Yakishow-api started! on ${HOST} - ${PORT}`);
  })
  .catch(error => {
    // tslint:disable-next-line:no-console
    console.error(error);
  });
