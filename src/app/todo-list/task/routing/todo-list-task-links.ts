import { Injectable, } from '@angular/core';

import { TODO_LIST_ROUTE,             } from '../../routing';
import { TODO_LIST_NEW_TASK_ROUTE,
         TODO_LIST_TASK_ROUTE,        } from './todo-list-task-routes-values';

@Injectable({
  providedIn: 'root',
})
export class TodoListTaskLinks {
  public addTodoListTaskLink(todoListId: string | number): Array<any> {
    return [
      '/',
      TODO_LIST_ROUTE,
      todoListId,
      TODO_LIST_TASK_ROUTE,
      TODO_LIST_NEW_TASK_ROUTE,
    ];
  }

  public updateTodoListTaskLink(
    todoListId: number | string,
    todoListTaskId: string | number): Array<any> {
    return [
      '/',
      TODO_LIST_ROUTE,
      todoListId,
      TODO_LIST_TASK_ROUTE,
      todoListTaskId,
    ];
  }

  public searchTodoListTasksLink(todoListId: number | string): Array<any> {
    return [
      '/',
      TODO_LIST_ROUTE,
      todoListId,
      TODO_LIST_TASK_ROUTE,
    ];
  }
}
