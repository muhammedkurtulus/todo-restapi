import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo/todo.controller';

@Module({
  imports: [],
  controllers: [AppController, TodoController, TodoController],
  providers: [AppService],
})
export class AppModule {}
