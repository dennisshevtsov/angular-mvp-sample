import { Injectable, } from '@angular/core';

import {
  AddTodoListRequestDto,
  GetTodoListRequestDto,
  GetTodoListResponseDto,
  UpdateTodoListRequestDto,
  SearchTodoListsRecordResponseDto,
  SearchTodoListsRequestDto, } from '../models';

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

  public searchTodoList(searchTodoListRequestDto: SearchTodoListsRequestDto): SearchTodoListsRecordResponseDto[] {
    return [
      new SearchTodoListsRecordResponseDto('49d0a40f-28ed-4332-9335-f55735476b7f', 'test'),
      new SearchTodoListsRecordResponseDto('c3b3125f-b002-48f0-bc13-ab12e6609f42', 'test'),
      new SearchTodoListsRecordResponseDto('53eba009-1efc-4885-8bc7-d2478e9f7bb7', 'test'),
      new SearchTodoListsRecordResponseDto('35817714-faa2-4f20-8e03-2f32d3ddb667', 'test'),
      new SearchTodoListsRecordResponseDto('be10e857-d057-4dbf-bf48-8ea7e02597c9', 'test'),
    ];
  }

  public addTodoList(addTodoListRequestDto: AddTodoListRequestDto): void {}

  public updateTodoList(updateTodoListRequestDto: UpdateTodoListRequestDto): void {}
}
