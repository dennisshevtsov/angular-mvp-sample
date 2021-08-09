import { Component, OnInit, } from '@angular/core';

import { TodoListTaskService,                  } from '../../services/todo-list-task.service';
import { SearchTodoListTasksPresenter,         } from './search-todo-list-tasks.presenter';
import { SearchTodoListTasksRecordResponseDto, } from '../../models';
import { SearchTodoListTasksView,              } from './search-todo-list-tasks.view';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse-todo-list',
  templateUrl: './browse-todo-list.component.html',
  styleUrls: [
    './browse-todo-list.component.scss',
  ],
})
export class BrowseTodoListComponent implements OnInit, SearchTodoListTasksView {
  private readonly _presenter: SearchTodoListTasksPresenter;

  private _todoListId: string | undefined;
  private _datasource: SearchTodoListTasksRecordResponseDto[] | undefined;

  public constructor(
    private readonly _route: ActivatedRoute,

    service: TodoListTaskService,
  ) {
    this._presenter = new SearchTodoListTasksPresenter(this, service);
  }

  public ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap) =>  {
      this.todoListId = paramMap.get('todoListId') ?? '';
      this._presenter.search();
    });
  }

  public get todoListId(): string {
    return this._todoListId ?? '';
  }

  public set todoListId(todoListId: string){
    this._todoListId = todoListId;
  }

  public get datasource(): SearchTodoListTasksRecordResponseDto[] {
    return this._datasource ?? (this._datasource = []);
  }

  public set datasource(datasource: SearchTodoListTasksRecordResponseDto[]) {
    this._datasource = datasource;
  }
}
