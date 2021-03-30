import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerOptions = new DocumentBuilder().setTitle('query-dto')
                                              .setDescription('Trying to reproduce the bug')
                                              .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
