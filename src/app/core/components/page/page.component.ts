import { Component, Input, TemplateRef, } from '@angular/core';

import { TodoListLinks, } from '../../../todo-list/routing';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: [
    './page.component.scss',
  ],
})
export class PageComponent {
  @Input()
  public actions: TemplateRef<any> | null = null;

  @Input()
  public body: TemplateRef<any> | null = null;

  public constructor (
    private readonly todoListLinks: TodoListLinks,
  ) {}

  public get homeLink(): Array<any> {
    return this.todoListLinks.searchTodoListsLink();
  }
}
