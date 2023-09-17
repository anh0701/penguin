import { Controller, Get, Param } from '@nestjs/common';
import { CommentService } from '../services/comment.service';
import { Comment as CommentModel } from '@prisma/client';
@Controller()
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  getHello(): string {
    return this.commentService.getHello();
  }
  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<CommentModel> {
    return this.commentService.comment({ id: Number(id) });
  }
}
