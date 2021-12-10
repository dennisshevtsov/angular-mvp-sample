import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { ActivatedRoute, ParamMap, Router,     } from '@angular/router';

import { DeleteTodoListRequestDto,
         SearchTodoListsRecordResponseDto,
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
})
export class SearchTodoListsComponent implements OnInit, SearchTodoListsView {
  private readonly presenter: SearchTodoListsPresenter;

  private selectedValue: DeleteTodoListRequestDto | undefined;
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

  public get selected(): DeleteTodoListRequestDto {
    return this.selectedValue ?? (this.selectedValue = new DeleteTodoListRequestDto());
  }

  public set selected(selected: DeleteTodoListRequestDto) {
    this.selectedValue = selected;
  }

  public get query(): SearchTodoListsRequestDto {
    return this.queryValue ?? (this.queryValue = new SearchTodoListsRequestDto());
  }

  public set query(query: SearchTodoListsRequestDto) {
    this.queryValue = query;
  }

  public get datasource(): SearchTodoListsRecordResponseDto[] {
    return this.todoListsValue ?? (this.todoListsValue = []);
  }

  public set datasource(datasource: SearchTodoListsRecordResponseDto[]) {
    this.todoListsValue = datasource;
  }

  public get searchTodoListsLink(): Array<any> {
    return [ '/', TODO_LIST_ROUTE, ];
  }

  public updateTodoListLink(todoListId: number): Array<any> {
    return [ '/', TODO_LIST_ROUTE, todoListId, ];
  }

  public get addTodoListLink(): Array<any> {
    return [ '/', TODO_LIST_ROUTE, TODO_LIST_NEW_ROUTE, ];
  }

  public searchTodoListTasks(todoListId: number): Array<any> {
    return [ '/', TODO_LIST_ROUTE, todoListId, TODO_LIST_TASK_ROUTE, ]
  }

  public onDeleteTodoList(todoList: SearchTodoListsRecordResponseDto): void {
    this.selected = { ...todoList, };
    this.presenter.delete();
    this.presenter.search();
  }
}
