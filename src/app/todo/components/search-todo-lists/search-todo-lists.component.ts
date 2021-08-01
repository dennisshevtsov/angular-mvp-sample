import { Component, OnInit, } from '@angular/core';
import { Router, } from '@angular/router';

import { GetTodoListRecordResponseDto, } from '../../models';
import { SearchTodoListsPresenter, } from './search-todo-lists.presenter';
import { SearchTodoListsView, } from './search-todo-lists.view';

@Component({
  selector: 'app-search-todo-lists',
  templateUrl: './search-todo-lists.component.html',
  styleUrls: [
    './search-todo-lists.component.scss',
  ],
})
export class SearchTodoListsComponent implements OnInit, SearchTodoListsView {
  private readonly presenter: SearchTodoListsPresenter;

  private datasource: GetTodoListRecordResponseDto[] | undefined;

  public constructor(
    private readonly router: Router,
  )
  {
    this.presenter = new SearchTodoListsPresenter(this);
  }

  public ngOnInit(): void {
    this.presenter.search();
  }

  public loadDatasource(datasource: GetTodoListRecordResponseDto[]): void {
    this.datasource = datasource;
  }

  public get records(): GetTodoListRecordResponseDto[] {
    if (this.datasource) {
      return this.datasource;
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
