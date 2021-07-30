import { Component, OnInit, } from '@angular/core';
import { TodoList } from '../../models/todo-list.model';

@Component({
  selector: 'app-search-todo-lists',
  templateUrl: './search-todo-lists.component.html',
  styleUrls: [
    './search-todo-lists.component.scss',
  ],
})
export class SearchTodoListsComponent implements OnInit {
  private todoLists: TodoList[] | undefined;

  public constructor() { }

  public ngOnInit(): void {
    this.todoLists = [
      new TodoList("test", "test", "test"),
      new TodoList("test", "test", "test"),
      new TodoList("test", "test", "test"),
      new TodoList("test", "test", "test"),
      new TodoList("test", "test", "test"),
    ];
  }

  public get Items(): TodoList[] {
    if (this.todoLists) {
      return this.todoLists;
    }

    return [];
  }
}
