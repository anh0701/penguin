import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Post('comment')
  async postComment(
    @Body() data: { content?: string; author: any },
  ): Promise<CommentModel> {
    const { content, author } = data;
    return this.commentService.createComment({
      content,
      author,
    });
  }
}
