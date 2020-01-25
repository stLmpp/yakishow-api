import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getEnvVar, isProd } from './util/env';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from '../package.json';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  if (!isProd) {
    app.enableCors();
    const options = new DocumentBuilder()
      .setTitle('Goals api')
      .setVersion(version)
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('help', app, document);
  }
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT,  '0.0.0.0');
}
bootstrap()
  .then(() => {
    // tslint:disable-next-line:no-console
    console.log('Yakishow-api started!');
  })
  .catch(error => {
    // tslint:disable-next-line:no-console
    console.error(error);
  });
