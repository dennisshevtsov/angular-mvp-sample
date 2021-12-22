import { Injectable, } from '@angular/core';

import { TODO_LIST_ROUTE,             } from '../../routing';
import { TodoListTaskRouteFactor,     } from './todo-list-task-route-factory';

@Injectable({
  providedIn: 'root',
})
export class TodoListTaskLinks {
  public constructor(
    private readonly todoListTaskRouteFactory: TodoListTaskRouteFactor,
  ) {}

  public addTodoListTaskLink(todoListId: string | number): Array<any> {
    return this.todoListRoute(todoListId).concat(this.todoListTaskRouteFactory.addTodoListTaskRoute());
  }

  public updateTodoListTaskLink(
    todoListId: number | string,
    todoListTaskId: string | number): Array<any> {
    return this.todoListRoute(todoListId).concat(this.todoListTaskRouteFactory.updateTodoListTaskRoute(todoListTaskId));
  }

  public searchTodoListTasksLink(todoListId: number | string): Array<any> {
    return this.todoListRoute(todoListId).concat(this.todoListTaskRouteFactory.searchTodoListTasksRoute());
  }

  private todoListRoute(todoListId: number | string): Array<any> {
    return [
      '/',
      TODO_LIST_ROUTE,
      todoListId,
    ];
  }
}
