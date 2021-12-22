import { Injectable, } from '@angular/core';

import { TODO_LIST_NEW_TASK_ROUTE,
         TODO_LIST_TASK_ROUTE, } from './todo-list-task-routes-values';

@Injectable({
  providedIn: 'root',
})
export class TodoListTaskRouteFactor {
  public addTodoListTaskRoute(): Array<any> {
    return [
      TODO_LIST_TASK_ROUTE,
      TODO_LIST_NEW_TASK_ROUTE,
    ];
  }

  public updateTodoListTaskRoute(
    todoListTaskId: string | number): Array<any> {
    return [
      TODO_LIST_TASK_ROUTE,
      todoListTaskId,
    ];
  }

  public searchTodoListTasksRoute(): Array<any> {
    return [
      TODO_LIST_TASK_ROUTE,
    ];
  }
}
