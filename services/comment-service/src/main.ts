import { NestFactory } from '@nestjs/core';
import { CommentModule } from './modules/comment.module';

async function bootstrap() {
  console.log(__dirname);
  const app = await NestFactory.create(CommentModule);
  await app.listen(3000);
}
bootstrap();

// npm run start:dev
