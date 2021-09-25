import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { ActivatedRoute, ParamMap, Router,     } from '@angular/router';

import { SearchTodoListsRecordResponseDto,
         SearchTodoListsRequestDto,
         TodoListService,                  } from '../../api';
import { TODO_LIST_NEW_ROUTE,
         TODO_LIST_ROUTE,                  } from '../../routing';
import { TODO_LIST_TASK_ROUTE,             } from '../../task/routing';
import { SearchTodoListsPresenter,         } from './search-todo-lists.presenter';
import { SearchTodoListsView,              } from './search-todo-lists.view';

@Component({
  templateUrl: './search-todo-lists.component.html',
  styleUrls: [
    './search-todo-lists.component.scss',
  ],
  encapsulation: ViewEncapsulation.None,
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
      TODO_LIST_ROUTE,
      todoListId,
    ]);
  }

  public onNavigateToAddTodoList(): void {
    this.router.navigate([
      TODO_LIST_ROUTE,
      TODO_LIST_NEW_ROUTE,
    ]);
  }

  public onNavigateToSearchTodoTasks(todoListId: number): void {
    const link = [
      todoListId,
      TODO_LIST_TASK_ROUTE,
    ];
    const extras = {
      relativeTo: this.route,
    };

    this.router.navigate(link, extras);
  }
}
