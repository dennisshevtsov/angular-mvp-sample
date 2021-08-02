import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';

import {
  SearchTodoListRecordResponseDto,
  SearchTodoListRequestDto, } from '../../models';
import { TodoListService, } from '../../services/todo-list.service';
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
  private readonly _presenter: SearchTodoListsPresenter;

  private _query: SearchTodoListRequestDto | undefined;
  private _datasource: SearchTodoListRecordResponseDto[] | undefined;

  public constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,

    service: TodoListService,
  ) {
    this._presenter = new SearchTodoListsPresenter(this, service);
  }

  public ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      const term = paramMap.get('term');

      if (term) {
        this.query.term = term;
        this._presenter.search();
      }
    });
  }

  public get query(): SearchTodoListRequestDto {
    return this._query ?? (this._query = new SearchTodoListRequestDto());
  }

  public set query(query: SearchTodoListRequestDto) {
    this._query = query;
  }

  public get datasource(): SearchTodoListRecordResponseDto[] {
    return this.datasource ?? (this.datasource = []);
  }

  public set datasource(datasource: SearchTodoListRecordResponseDto[]) {
    this._datasource = datasource;
  }

  public onNavigateToUpdate(todoListId: string): void {
    this._router.navigate([
      'todo-list',
      todoListId,
    ]);
  }
}
