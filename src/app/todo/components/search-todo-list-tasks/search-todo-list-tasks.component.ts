import { Component, OnInit, } from '@angular/core';

import { TodoListTaskService,                  } from '../../services/todo-list-task.service';
import { SearchTodoListTasksPresenter,         } from './search-todo-list-tasks.presenter';
import { SearchTodoListTasksRecordResponseDto, } from '../../models';
import { SearchTodoListTasksView,              } from './search-todo-list-tasks.view';

@Component({
  selector: 'app-browse-todo-list',
  templateUrl: './browse-todo-list.component.html',
  styleUrls: [
    './browse-todo-list.component.scss',
  ],
})
export class BrowseTodoListComponent implements OnInit, SearchTodoListTasksView {
  private readonly _presenter: SearchTodoListTasksPresenter;

  private _datasource: SearchTodoListTasksRecordResponseDto[] | undefined;

  public constructor(
    service: TodoListTaskService,
  ) {
    this._presenter = new SearchTodoListTasksPresenter(this, service);
  }

  public ngOnInit(): void {
  }

  public get datasource(): SearchTodoListTasksRecordResponseDto[] {
    return this._datasource ?? (this._datasource = []);
  }

  public set datasource(datasource: SearchTodoListTasksRecordResponseDto[]) {
    this._datasource = datasource;
  }
}
