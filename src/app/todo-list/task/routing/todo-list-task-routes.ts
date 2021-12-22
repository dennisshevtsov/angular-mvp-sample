import { Injectable, } from '@angular/core';

import { TODO_LIST_ID_PARAMETER,      } from '../../routing';
import { TodoListTaskLinks,           } from './todo-list-task-links';
import { TODO_LIST_TASK_ID_PARAMETER, } from './todo-list-task-routes-values';

@Injectable({
  providedIn: 'root',
})
export class TodoListTaskRoutes {
  public constructor(
    private readonly links: TodoListTaskLinks,
  ) {}

  public addTodoListRoute(): string {
    return this.convertToRoute(
      this.links.addTodoListTaskLink(`:${TODO_LIST_ID_PARAMETER}`));
  }

  public updateTodoListRoute(): string {
    return this.convertToRoute(
      this.links.updateTodoListTaskLink(
        `:${TODO_LIST_ID_PARAMETER}`,
        `:${TODO_LIST_TASK_ID_PARAMETER}`));
  }

  public searchTodoListsRoute(): string {
    return this.convertToRoute(
      this.links.searchTodoListTasksLink(`:${TODO_LIST_ID_PARAMETER}`));
  }

  private convertToRoute(link: Array<any>): string {
    return link.slice(1).join('/');
  }
}
