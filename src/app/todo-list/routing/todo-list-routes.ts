import { TodoListLinks,       } from './todo-list-links';
import { TODO_LIST_PARAMETER, } from './todo-list-routes-defaults';

export class TodoListRoutes {
  public static addTodoListLink() {
    return TodoListLinks.addTodoListLink();
  }

  public static updateTodoListLink() {
    return TodoListLinks.updateTodoListLink(`:${TODO_LIST_PARAMETER}`);
  }

  public static searchTodoLists() {
    return TodoListLinks.searchTodoLists();
  }
}
