import { Router, } from '@angular/router';

import { TodoListLinks, } from './todo-list-links';

export class TodoListNavigator {
  public constructor(
    private readonly router: Router,
    private readonly links: TodoListLinks,
  ) {}

  public navigateToSearchTodoLists() {
    this.router.navigate(this.links.searchTodoListsLink());
  }
}
