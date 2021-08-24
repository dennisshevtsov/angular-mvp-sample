import { Injectable, } from '@angular/core';

import {
  AddTodoListRequestDto,
  GetTodoListRequestDto,
  GetTodoListResponseDto,
  UpdateTodoListRequestDto,
  SearchTodoListsRecordResponseDto,
  SearchTodoListsRequestDto,        } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoLists: {
    todoListId: number,
    title: string,
    description: string,
  }[] = [];

  public constructor() { }

  public getTodoList(
    getTodoListRequestDto: GetTodoListRequestDto)
    : GetTodoListResponseDto | null {
    const index = this.todoLists.findIndex(todoList => todoList.todoListId === getTodoListRequestDto.todoListId);

    if (index > -1) {
      const todoList =  this.todoLists[index];

      return { ...todoList, };
    }

    return null;
  }

  public searchTodoList(searchTodoListRequestDto: SearchTodoListsRequestDto): SearchTodoListsRecordResponseDto[] {
    return this.todoLists.map(todoList => new SearchTodoListsRecordResponseDto(
      todoList.todoListId, todoList.title));
  }

  public addTodoList(addTodoListRequestDto: AddTodoListRequestDto): void {
    this.todoLists.push({
      todoListId: this.todoLists.length + 1,
      title: addTodoListRequestDto.title,
      description: addTodoListRequestDto.description,
    });
  }

  public updateTodoList(updateTodoListRequestDto: UpdateTodoListRequestDto): void {
    const index = this.todoLists.findIndex(todoList => todoList.todoListId === updateTodoListRequestDto.todoListId);
    const todoList =  this.todoLists[index];

    todoList.title = updateTodoListRequestDto.title;
    todoList.description = updateTodoListRequestDto.description;
  }
}
