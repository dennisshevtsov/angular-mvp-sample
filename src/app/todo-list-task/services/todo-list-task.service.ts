import { Injectable, } from '@angular/core';

import { CompleteTodoListTaskRequestDto,
         SearchTodoListTasksRecordResponseDto,
         SearchTodoListTasksRequestDto,
         UpdateTodoListTaskRequestDto,         } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TodoListTaskService {
  public constructor() { }

  public searchTodoListTasks(
    searchTodoListTasksRequestDto: SearchTodoListTasksRequestDto)
    : SearchTodoListTasksRecordResponseDto[] {
    return [
      new SearchTodoListTasksRecordResponseDto('91ebb054-43e5-4ed1-b6e2-f853c0c5d30b', 'test'),
      new SearchTodoListTasksRecordResponseDto('ffd832c4-742f-4782-9bfa-a83cb3a179dc', 'test'),
      new SearchTodoListTasksRecordResponseDto('b348a4ef-168c-4b63-aa44-a8ce6bf631a7', 'test'),
      new SearchTodoListTasksRecordResponseDto('5283ed0a-7a9a-4bff-8b35-8e3b4fefb827', 'test'),
      new SearchTodoListTasksRecordResponseDto('5c603fe1-93fc-4872-942c-6212db18664d', 'test'),
    ];
  }

  public updateTodoListTask(
    updateTodoListTaskRequestDto: UpdateTodoListTaskRequestDto)
    : void {
  }

  public completeTodoListTask(
    completeTodoListTaskRequestDto: CompleteTodoListTaskRequestDto)
    : void {
  }
}
