import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  getHello(): string {
    return 'Hello World!';
  }
  constructor(
    @Inject('COMMENT_REPOSITORY')
    private photoRepository: Repository<Comment>,
  ) {}

  async findAll(): Promise<Comment[]> {
    return this.photoRepository.find();
  }
}
