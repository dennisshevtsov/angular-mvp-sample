import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { FormBuilder, FormGroup, Validators,   } from '@angular/forms';
import { Router,                               } from '@angular/router';

import { AddTodoListRequestDto,
         TodoListService,       } from '../../api';
import { TODO_LIST_ROUTE,       } from '../../routing';
import { AddTodoListPresenter,  } from './add-todo-list.presenter';
import { AddTodoListView,       } from './add-todo-list.view';

@Component({
  templateUrl: './add-todo-list.component.html',
  styleUrls: [
    './add-todo-list.component.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AddTodoListComponent implements OnInit, AddTodoListView {
  private readonly presenter: AddTodoListPresenter;

  private formValue: FormGroup | undefined;

  public constructor(
    private readonly router: Router,
    private readonly builder: FormBuilder,

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

  public get todoList(): AddTodoListRequestDto {
    return this.form.value;
  }

  public isValid(controlName: string): boolean {
    const control = this.form.get(controlName);

    return control == null || !(control.touched || control.dirty) || control.valid;
  }

  public hasErrors(controlName: string): boolean {
    const control = this.form.get(controlName);

    return control != null && (control.touched || control.dirty) && control.errors != null;
  }

  public hasError(controlName: string, errorCode: string): boolean {
    const control = this.form.get(controlName);

    return control != null && control.hasError(errorCode);
  }

  public get searchTodoListsLink(): Array<any> {
    return [ '/', TODO_LIST_ROUTE, ];
  }

  public onSubmit(): void {
    this.presenter.add();
    this.router.navigate([ TODO_LIST_ROUTE, ]);
  }

  private buildForm(): FormGroup {
    return this.builder.group({
      'title': this.builder.control('', Validators.required),
      'description': '',
    });
  }
}
