import { Component, OnInit,      } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { Router,                 } from '@angular/router';

import { AddTodoListRequestDto, } from '../../models';
import { TodoListService,       } from '../../services';
import { AddTodoListPresenter,  } from './add-todo-list.presenter';
import { AddTodoListView,       } from './add-todo-list.view';

@Component({
  templateUrl: './add-todo-list.component.html',
  styleUrls: [
    './add-todo-list.component.scss',
  ],
})
export class AddTodoListComponent implements OnInit, AddTodoListView {
  private readonly presenter: AddTodoListPresenter;

  private formValue: FormGroup | undefined;
  private datasourceValue: AddTodoListRequestDto | undefined;

  public constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,

    service: TodoListService,
  ) {
    this.presenter = new AddTodoListPresenter(this, service);
  }

  public ngOnInit(): void {
    this.formValue = this.buildForm();
  }

  public get form(): FormGroup {
    return this.formValue ?? (this.formValue = this.buildForm());
  }

  public get datasource(): AddTodoListRequestDto {
    return this.datasourceValue ?? (this.datasourceValue = new AddTodoListRequestDto());
  }

  public onSubmit(): void {
    this.presenter.add();
  }

  public onCancel(): void {
    this.router.navigate([
      'todo-list',
    ]);
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      title: '',
      description: '',
    });
  }
}
