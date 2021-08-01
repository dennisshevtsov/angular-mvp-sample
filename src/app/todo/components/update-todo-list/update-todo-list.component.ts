import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, ParamMap, } from '@angular/router';

import { TodoListService, } from '../../services/todo-list.service';
import { UpdateTodoListView, } from './update-todo-list.view';
import { UpdateTodoListPresenter, } from './update-todo-list.presenter';
import { UpdateTodoListRequestDto, } from '../../models';

@Component({
  selector: 'app-update-todo-list',
  templateUrl: './update-todo-list.component.html',
  styleUrls: [
    './update-todo-list.component.scss',
  ],
})
export class UpdateTodoListComponent implements OnInit, UpdateTodoListView {
  private readonly _presenter: UpdateTodoListPresenter;

  private _datasource: UpdateTodoListRequestDto | undefined;

  public constructor(
    private readonly _route: ActivatedRoute,

    service: TodoListService,
  ) {
    this._presenter = new UpdateTodoListPresenter(this, service);
  }

  public ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoListId: string | null = paramMap.get('todoListId');

      if (todoListId) {
        this.datasource.todoListId = todoListId;
        this._presenter.load();
      }
    });
  }

  public set datasource(datasource: UpdateTodoListRequestDto) {
    this._datasource = datasource;
  }

  public get datasource(): UpdateTodoListRequestDto {
    return this._datasource ?? (this.datasource = new UpdateTodoListRequestDto());
  }

  public update(): void {
    this._presenter.update();
  }
}
