import { Component, OnInit,                } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';

import { SearchTodoListsRecordResponseDto,
        SearchTodoListsRequestDto,         } from '../../models';
import { TodoListService,                  } from '../../services';
import { SearchTodoListsPresenter,         } from './search-todo-lists.presenter';
import { SearchTodoListsView,              } from './search-todo-lists.view';

@Component({
  selector: 'app-search-todo-lists',
  templateUrl: './search-todo-lists.component.html',
  styleUrls: [
    './search-todo-lists.component.scss',
  ],
})
export class SearchTodoListsComponent implements OnInit, SearchTodoListsView {
  private readonly presenter: SearchTodoListsPresenter;

  private queryValue: SearchTodoListsRequestDto | undefined;
  private datasourceValue: SearchTodoListsRecordResponseDto[] | undefined;

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

  public get datasource(): SearchTodoListsRecordResponseDto[] {
    return this.datasourceValue ?? (this.datasourceValue = []);
  }

  public set datasource(datasource: SearchTodoListsRecordResponseDto[]) {
    this.datasourceValue = datasource;
  }

  public onNavigateToUpdate(todoListId: string): void {
    this.router.navigate([
      'todo-list',
      todoListId,
    ]);
  }

  public onNavigateToAdd(): void {
    this.router.navigate([
      'todo-list',
      'new',
    ]);
  }
}
