import { Component, OnInit,      } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';

import { TodoListService,                      } from '../../../api';
import { TODO_LIST_ROUTE, TODO_LIST_PARAMETER, } from '../../../routing';
import { SearchTodoListTasksRecordResponseDto,
         SearchTodoListTasksRequestDto,
         TodoListTaskService,                  } from '../../api';
import { TODO_LIST_NEW_TASK_ROUTE,
         TODO_LIST_TASK_ROUTE,                 } from '../../routing';
import { SearchTodoListTasksPresenter,         } from './search-todo-list-tasks.presenter';
import { SearchTodoListTasksView,              } from './search-todo-list-tasks.view';

@Component({
  templateUrl: './search-todo-list-tasks.component.html',
  styleUrls: [
    './search-todo-list-tasks.component.scss',
  ],
})
export class SearchTodoListTasksComponent implements OnInit, SearchTodoListTasksView {
  private readonly presenter: SearchTodoListTasksPresenter;

  private queryValue: SearchTodoListTasksRequestDto | undefined;
  private datasourceValue: SearchTodoListTasksRecordResponseDto[] | undefined;
  private selectedValue: SearchTodoListTasksRecordResponseDto | undefined;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,

    todoListService: TodoListService,
    todoListTaskService: TodoListTaskService,
  ) {
    this.presenter = new SearchTodoListTasksPresenter(
      this, todoListService, todoListTaskService);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const todoListId = paramMap.get(TODO_LIST_PARAMETER);

      if (todoListId) {
        this.query.todoListId = +todoListId;
        this.presenter.search();
      }
    });
  }

  public get query(): SearchTodoListTasksRequestDto {
    return this.queryValue ?? (this.queryValue = new SearchTodoListTasksRequestDto(0));
  }

  public get datasource(): SearchTodoListTasksRecordResponseDto[] {
    return this.datasourceValue ?? (this.datasourceValue = []);
  }

  public set datasource(datasource: SearchTodoListTasksRecordResponseDto[]) {
    this.datasourceValue = datasource;
  }

  public get selected(): SearchTodoListTasksRecordResponseDto {
    return this.selectedValue!;
  }

  public set selected(selectedTodoListTask: SearchTodoListTasksRecordResponseDto) {
    this.selectedValue = selectedTodoListTask;
  }

  public onComplete(record: SearchTodoListTasksRecordResponseDto): void {
    this.selected = record;

    if (!record.completed) {
      this.presenter.complete();
    } else {
      this.presenter.uncomplete();
    }

    record.completed = !record.completed;
  }

  public onBack(): void {
    const link = [
      '../../',
    ];
    const extras = {
      relativeTo: this.route,
    };

    this.router.navigate(link, extras);
  }

  public onAdd(): void {
    const link = [
      TODO_LIST_NEW_TASK_ROUTE,
    ];
    const extras = {
      relativeTo: this.route,
    };

    this.router.navigate(link, extras);
  }

  public onUpdate(
    todoListTask: SearchTodoListTasksRecordResponseDto)
    : void {
    const link = [
      todoListTask.todoListTaskId,
    ];
    const extras = {
      relativeTo: this.route,
    };

    this.router.navigate(link, extras);
  }
}
