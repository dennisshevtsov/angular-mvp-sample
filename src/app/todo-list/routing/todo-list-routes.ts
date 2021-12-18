import { Injectable, } from '@angular/core';

import { TodoListLinks,       } from './todo-list-links';
import { TODO_LIST_PARAMETER, } from './todo-list-routes-defaults';

@Injectable({
  providedIn: 'root',
})
export class TodoListRoutes {
  public constructor(
    private readonly links: TodoListLinks,
  ) {}

  public addTodoListRoute(): string {
    return this.convertToRoute(this.links.addTodoListLink());
  }

  public updateTodoListRoute(): string {
    return this.convertToRoute(this.links.updateTodoListLink(`:${TODO_LIST_PARAMETER}`));
  }

  public searchTodoListsRoute(): string {
    return this.convertToRoute(this.links.searchTodoListsLink());
  }

  private convertToRoute(link: Array<any>): string {
    return link.join('/');
  }
}
