import { Component,     } from '@angular/core';
import { TodoListLinks, } from './todo-list/routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ],
})
export class AppComponent {
  public constructor (
    private readonly todoListLinks: TodoListLinks,
  ) {}

  public get homeLink(): Array<any> {
    return this.todoListLinks.searchTodoListsLink();
  }
}
