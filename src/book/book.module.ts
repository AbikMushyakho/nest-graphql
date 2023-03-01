import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BookEntity } from './entities/book.entity';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [],
  providers: [BookService, BookResolver],
  exports: [BookService],
})
export class BookModule {}
