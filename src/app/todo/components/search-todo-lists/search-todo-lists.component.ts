import { Component, OnInit, } from '@angular/core';
import { Router, } from '@angular/router';

import { GetTodoListRecordResponseDto, } from '../../models';
import { SearchTodoListsPresenter, } from '../../presenters';
import { SearchTodoListsView, } from '../../views';

@Component({
  selector: 'app-search-todo-lists',
  templateUrl: './search-todo-lists.component.html',
  styleUrls: [
    './search-todo-lists.component.scss',
  ],
})
export class SearchTodoListsComponent implements OnInit, SearchTodoListsView {
  private readonly presenter: SearchTodoListsPresenter;
  
  private todoLists: GetTodoListRecordResponseDto[] | undefined;

  public constructor(
    private readonly router: Router,
  )
  {
    this.presenter = new SearchTodoListsPresenter(this);
  }

  public ngOnInit(): void {
    this.presenter.search();
  }

  public loadTodoLists(todoLists: GetTodoListRecordResponseDto[]): void {
    this.todoLists = todoLists;
  }

  public get Items(): GetTodoListRecordResponseDto[] {
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
