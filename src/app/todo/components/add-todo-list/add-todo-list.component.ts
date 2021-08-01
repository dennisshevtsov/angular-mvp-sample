import { Component, } from '@angular/core';

import { AddTodoListRequestDto, } from '../../models';
import { TodoListServiceService, } from '../../services/todo-list-service.service';
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
    private _service: TodoListServiceService,
  ) {
    this._presenter = new AddTodoListPresenter(this, _service);
  }

  public get datasource(): AddTodoListRequestDto {
    if (!this._datasource) {
      this._datasource = new AddTodoListRequestDto();
    }

    return this._datasource;
  }

  public onSave(): void {
    this._presenter.save();
  }
}
