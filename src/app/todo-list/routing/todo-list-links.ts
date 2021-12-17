import { TODO_LIST_NEW_ROUTE,
         TODO_LIST_ROUTE,     } from './todo-list-routes-defaults';

export class TodoListLinks {
  public static addTodoListLink() {
    return `${TODO_LIST_ROUTE}/${TODO_LIST_NEW_ROUTE}`;
  }

  public static updateTodoListLink(todoListId: number | string) {
    return `${TODO_LIST_ROUTE}/${todoListId}`;
  }

  public static searchTodoLists() {
    return TODO_LIST_ROUTE;
  }
}
