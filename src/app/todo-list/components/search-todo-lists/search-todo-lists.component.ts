import { Component, OnInit,                } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';

import { SearchTodoListsRecordResponseDto,
         SearchTodoListsRequestDto,
         TodoListService,                  } from '../../../todo-list-api';
import { SearchTodoListsPresenter,         } from './search-todo-lists.presenter';
import { SearchTodoListsView,              } from './search-todo-lists.view';

@Component({
  templateUrl: './search-todo-lists.component.html',
  styleUrls: [
    './search-todo-lists.component.scss',
  ],
})
export class SearchTodoListsComponent implements OnInit, SearchTodoListsView {
  private readonly presenter: SearchTodoListsPresenter;

  private queryValue: SearchTodoListsRequestDto | undefined;
  private todoListsValue: SearchTodoListsRecordResponseDto[] | undefined;

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,

    service: TodoListService,
  ) {
    this.presenter = new SearchTodoListsPresenter(this, service);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.query.term = paramMap.get('term') ?? '';
      this.presenter.search();
    });
  }

  public get query(): SearchTodoListsRequestDto {
    return this.queryValue ?? (this.queryValue = new SearchTodoListsRequestDto());
  }

  public set query(query: SearchTodoListsRequestDto) {
    this.queryValue = query;
  }

  public get todoLists(): SearchTodoListsRecordResponseDto[] {
    return this.todoListsValue ?? (this.todoListsValue = []);
  }

  public set todoLists(datasource: SearchTodoListsRecordResponseDto[]) {
    this.todoListsValue = datasource;
  }

  public onNavigateToUpdateTodoList(todoListId: number): void {
    this.router.navigate([
      'todo-list',
      todoListId,
    ]);
  }

  public onNavigateToAddTodoList(): void {
    this.router.navigate([
      'todo-list',
      'new',
    ]);
  }

  public onNavigateToSearchTodoTasks(todoListId: number): void {
    this.router.navigate([
      'todo-list',
      todoListId,
      'task',
    ]);
  }
}
