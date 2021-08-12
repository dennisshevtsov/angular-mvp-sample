import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute,    } from '@angular/router';

import { SearchTodoListTasksRecordResponseDto, } from '../../models';
import { TodoListTaskService,                  } from '../../services';
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

  private todoListIdValue: string | undefined;
  private datasourceValue: SearchTodoListTasksRecordResponseDto[] | undefined;

  public constructor(
    private readonly route: ActivatedRoute,

    service: TodoListTaskService,
  ) {
    this.presenter = new SearchTodoListTasksPresenter(this, service);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) =>  {
      this.todoListId = paramMap.get('todoListId') ?? '';
      this.presenter.search();
    });
  }

  public get todoListId(): string {
    return this.todoListIdValue ?? '';
  }

  public set todoListId(todoListId: string){
    this.todoListIdValue = todoListId;
  }

  public get datasource(): SearchTodoListTasksRecordResponseDto[] {
    return this.datasourceValue ?? (this.datasourceValue = []);
  }

  public set datasource(datasource: SearchTodoListTasksRecordResponseDto[]) {
    this.datasourceValue = datasource;
  }

  public onComplete(record: SearchTodoListTasksRecordResponseDto): void {
    if (!record.completed) {
      this.presenter.complete(record.todoListTaskId);

      record.completed = true;
    }
  }
}
