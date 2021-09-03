import { Component, OnInit,      } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { Router,                 } from '@angular/router';

import { AddTodoListRequestDto,
         TodoListService,       } from '../../../todo-list-api';
import { TODO_LIST_ROUTE_BASE,  } from '../../todo-list-routing.module';
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

  public get todoList(): AddTodoListRequestDto {
    return this.form.value;
  }

  public onSubmit(): void {
    this.presenter.add();
    this.navigateToSearchTodoList();
  }

  public onCancel(): void {
    this.navigateToSearchTodoList();
  }

  private navigateToSearchTodoList() {
    this.router.navigate([
      TODO_LIST_ROUTE_BASE,
    ]);
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      title: '',
      description: '',
    });
  }
}
