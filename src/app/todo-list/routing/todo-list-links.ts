import { Injectable, } from '@angular/core';

import { TODO_LIST_NEW_ROUTE,
         TODO_LIST_ROUTE,     } from './todo-list-routes-values';

@Injectable({
  providedIn: 'root',
})
export class TodoListLinks {
  public addTodoListLink(): Array<any> {
    return [
      '/',
      TODO_LIST_ROUTE,
      TODO_LIST_NEW_ROUTE,
    ];
  }

  public updateTodoListLink(todoListId: number | string): Array<any> {
    return [
      '/',
      TODO_LIST_ROUTE,
      todoListId,
    ];
  }

  public searchTodoListsLink(): Array<any> {
    return [
      '/',
      TODO_LIST_ROUTE,
    ];
  }
}
