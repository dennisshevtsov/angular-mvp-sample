import { Component, OnInit,      } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { Router,                 } from '@angular/router';

import { AddTodoListRequestDto, } from '../../models';
import { TodoListService,       } from '../../services/todo-list.service';
import { AddTodoListPresenter,  } from './add-todo-list.presenter';
import { AddTodoListView,       } from './add-todo-list.view';

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: [
    './add-todo-list.component.scss',
  ],
})
export class AddTodoListComponent implements OnInit, AddTodoListView {
  private readonly _presenter: AddTodoListPresenter;

  private _form: FormGroup | undefined;
  private _datasource: AddTodoListRequestDto | undefined;

  public constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,

    service: TodoListService,
  ) {
    this._presenter = new AddTodoListPresenter(this, service);
  }

  public ngOnInit(): void {
    this._form = this.buildForm();
  }

  public get form(): FormGroup {
    return this._form ?? (this._form = this.buildForm());
  }

  public get datasource(): AddTodoListRequestDto {
    return this._datasource ?? (this._datasource = new AddTodoListRequestDto());
  }

  public onSubmit(): void {
    this._presenter.add();
  }

  public onCancel(): void {
    this._router.navigate([
      'todo-list',
    ]);
  }

  private buildForm(): FormGroup {
    return this._formBuilder.group({
      title: '',
      description: '',
    });
  }
}
