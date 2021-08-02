import { Component, } from '@angular/core';

import { AddTodoListRequestDto, } from '../../models';
import { TodoListService, } from '../../services/todo-list.service';
import { AddTodoListPresenter, } from './add-todo-list.presenter';
import { AddTodoListView, } from './add-todo-list.view';

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.scss']
})
export class AddTodoListComponent implements AddTodoListView {
  private readonly _presenter: AddTodoListPresenter;

  private _datasource: AddTodoListRequestDto | undefined;

  public constructor(
    service: TodoListService,
  ) {
    this._presenter = new AddTodoListPresenter(this, service);
  }

  public get datasource(): AddTodoListRequestDto {
    return this._datasource ?? (this._datasource = new AddTodoListRequestDto());
  }

  public onSave(): void {
    this._presenter.add();
  }
}
