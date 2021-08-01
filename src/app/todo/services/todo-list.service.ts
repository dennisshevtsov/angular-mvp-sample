import { Injectable, } from '@angular/core';

import {
  AddTodoListRequestDto,
  GetTodoListRequestDto,
  GetTodoListResponseDto,
  UpdateTodoListRequestDto, } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  public constructor() { }

  public getTodoList(getTodoListRequestDto: GetTodoListRequestDto): GetTodoListResponseDto {
    return {
      todoListId: getTodoListRequestDto.todoListId,
      title: 'test',
      description: 'test',
    }
  }

  public addTodoList(addTodoListRequestDto: AddTodoListRequestDto): void {}

  public updateTodoList(updateTodoListRequestDto: UpdateTodoListRequestDto): void {}
}
