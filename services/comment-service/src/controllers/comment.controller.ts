import { Controller, Get } from '@nestjs/common';
import { CommentService } from '../services/comment.service';

@Controller()
export class CommentController {
  constructor(private readonly appService: CommentService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
