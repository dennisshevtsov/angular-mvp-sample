import { Location, } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { Router, } from '@angular/router';

import { TodoList, } from '../../models/todo-list.model';

@Component({
  selector: 'app-search-todo-lists',
  templateUrl: './search-todo-lists.component.html',
  styleUrls: [
    './search-todo-lists.component.scss',
  ],
})
export class SearchTodoListsComponent implements OnInit {
  private todoLists: TodoList[] | undefined;

  public constructor(
    private location: Location,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.todoLists = [
      new TodoList('test', 'test', 'test'),
      new TodoList('test', 'test', 'test'),
      new TodoList('test', 'test', 'test'),
      new TodoList('test', 'test', 'test'),
      new TodoList('test', 'test', 'test'),
    ];
  }

  public get Items(): TodoList[] {
    if (this.todoLists) {
      return this.todoLists;
    }

    return [];
  }

  public onNavigateToUpdate(todoListId: string): void {
    this.router.navigate([
      'todo-list',
      todoListId,
    ]);
  }
}
