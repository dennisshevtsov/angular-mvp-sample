import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';

import {
  SearchTodoListsRecordResponseDto,
  SearchTodoListsRequestDto, } from '../../models';
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

  private _query: SearchTodoListsRequestDto | undefined;
  private _datasource: SearchTodoListsRecordResponseDto[] | undefined;

  public constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,

    service: TodoListService,
  ) {
    this._presenter = new SearchTodoListsPresenter(this, service);
  }

  public ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      this.query.term = paramMap.get('term') ?? '';
      this._presenter.search();
    });
  }

  public get query(): SearchTodoListsRequestDto {
    return this._query ?? (this._query = new SearchTodoListsRequestDto());
  }

  public set query(query: SearchTodoListsRequestDto) {
    this._query = query;
  }

  public get datasource(): SearchTodoListsRecordResponseDto[] {
    return this._datasource ?? (this._datasource = []);
  }

  public set datasource(datasource: SearchTodoListsRecordResponseDto[]) {
    this._datasource = datasource;
  }

  public onNavigateToUpdate(todoListId: string): void {
    this._router.navigate([
      'todo-list',
      todoListId,
    ]);
  }

  public onNavigateToAdd(): void {
    this._router.navigate([
      'todo-list',
      'new',
    ]);
  }
}
