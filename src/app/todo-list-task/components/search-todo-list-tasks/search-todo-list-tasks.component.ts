import { Component, OnInit,      } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';

import { SearchTodoListTasksPresenter,         } from './search-todo-list-tasks.presenter';
import { SearchTodoListTasksView,              } from './search-todo-list-tasks.view';
import { SearchTodoListTasksRecordResponseDto, } from '../../models';
import { TodoListTaskService,                  } from '../../services';
import { GetTodoListResponseDto,               } from '../../../todo-list/models';

@Component({
  templateUrl: './search-todo-list-tasks.component.html',
  styleUrls: [
    './search-todo-list-tasks.component.scss',
  ],
})
export class SearchTodoListTasksComponent implements OnInit, SearchTodoListTasksView {
  private readonly presenter: SearchTodoListTasksPresenter;

  private todoListValue: GetTodoListResponseDto | undefined;
  private todoListTasksValue: SearchTodoListTasksRecordResponseDto[] | undefined;
  private selectedTodoListTaskValue: SearchTodoListTasksRecordResponseDto | undefined;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,

    service: TodoListTaskService,
  ) {
    this.presenter = new SearchTodoListTasksPresenter(this, service);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const todoListId = paramMap.get('todoListId');

      if (todoListId) {
        this.todoList.todoListId = +todoListId;

        this.presenter.search();
      }
    });
  }

  public get todoList(): GetTodoListResponseDto {
    return this.todoListValue ?? new GetTodoListResponseDto(0, '', '');
  }

  public set todoListId(todoList: GetTodoListResponseDto){
    this.todoListValue = todoList;
  }

  public get todoListTasks(): SearchTodoListTasksRecordResponseDto[] {
    return this.todoListTasksValue ?? (this.todoListTasksValue = []);
  }

  public set todoListTasks(datasource: SearchTodoListTasksRecordResponseDto[]) {
    this.todoListTasksValue = datasource;
  }

  public get selectedTodoListTask(): SearchTodoListTasksRecordResponseDto {
    return this.selectedTodoListTaskValue!;
  }

  public set selectedTodoListTask(selectedTodoListTask: SearchTodoListTasksRecordResponseDto) {
    this.selectedTodoListTaskValue = selectedTodoListTask;
  }

  public onComplete(record: SearchTodoListTasksRecordResponseDto): void {
    if (!record.completed) {
      this.selectedTodoListTask = record;
      this.presenter.complete();

      record.completed = true;
    }
  }

  public onAdd(): void {
    this.router.navigate([
      'todo-list',
      this.todoListId,
      'task',
      'new',
    ]);
  }

  public onNavigateToGetTodoList(): void {
    this.router.navigate([
      'todo-list',
      this.todoListId,
    ]);
  }
}
