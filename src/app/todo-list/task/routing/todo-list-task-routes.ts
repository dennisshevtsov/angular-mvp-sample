import { Injectable, } from '@angular/core';

import { TodoListTaskRouteFactory,    } from './todo-list-task-route-factory';
import { TODO_LIST_TASK_ID_PARAMETER, } from './todo-list-task-routes-values';

@Injectable({
  providedIn: 'root',
})
export class TodoListTaskRoutes {
  public constructor(
    private readonly todoListTaskRouteFactory: TodoListTaskRouteFactory,
  ) {}

  public addTodoListRoute(): string {
    return this.convertToRoute(
      this.todoListTaskRouteFactory.addTodoListTaskRoute());
  }

  public updateTodoListRoute(): string {
    return this.convertToRoute(
      this.todoListTaskRouteFactory.updateTodoListTaskRoute(
        `:${TODO_LIST_TASK_ID_PARAMETER}`));
  }

  public searchTodoListsRoute(): string {
    return this.convertToRoute(
      this.todoListTaskRouteFactory.searchTodoListTasksRoute());
  }

  private convertToRoute(link: Array<any>): string {
    return link.join('/');
  }
}
