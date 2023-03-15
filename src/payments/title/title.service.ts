import { Injectable } from '@nestjs/common';
import { CreateTitleDto } from './dto/create-title.dto';

@Injectable()
export class TitleService {
  create(createTitleDto: CreateTitleDto) {
    return 'This action adds a new title';
  }

  findAll() {
    return `This action returns all title`;
  }

  findOne(id: number) {
    return `This action returns a #${id} title`;
  }

  remove(id: number) {
    return `This action removes a #${id} title`;
  }
}
