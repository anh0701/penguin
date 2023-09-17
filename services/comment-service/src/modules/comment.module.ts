import { Module } from '@nestjs/common';
import { CommentController } from '../controllers/comment.controller';
import { CommentService } from '../services/comment.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  imports: [],
  controllers: [CommentController],
  providers: [CommentService, PrismaService],
})
export class CommentModule {}
