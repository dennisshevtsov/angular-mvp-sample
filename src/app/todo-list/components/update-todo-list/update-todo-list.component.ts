import { Component, OnInit,                  } from '@angular/core';
import { ActivatedRoute, ParamMap, Router,   } from '@angular/router';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

import { TodoListService,
         UpdateTodoListRequestDto, } from '../../api';
import { TODO_LIST_ROUTE,          } from '../../routing';
import { UpdateTodoListView,       } from './update-todo-list.view';
import { UpdateTodoListPresenter,  } from './update-todo-list.presenter';

@Component({
  templateUrl: './update-todo-list.component.html',
  styleUrls: [
    './update-todo-list.component.scss',
  ],
})
export class UpdateTodoListComponent implements OnInit, UpdateTodoListView {
  private readonly presenter: UpdateTodoListPresenter;

  private formValue: FormGroup | undefined;
  private todoListIdValue: number | undefined;

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly builder: FormBuilder,

    service: TodoListService,
  ) {
    this.presenter = new UpdateTodoListPresenter(this, service);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoListId = paramMap.get('todoListId');

      if (todoListId) {
        this.todoListIdValue = +todoListId;
        this.presenter.load();
      }
    });
  }

  public get form(): FormGroup {
    return this.formValue ?? (this.formValue = this.buildForm());
  }

  public get todoList(): UpdateTodoListRequestDto {
    return new UpdateTodoListRequestDto(
      this.todoListIdValue,
      this.form.value.title,
      this.form.value.description,
    );
  }

  public set todoList(todoList: UpdateTodoListRequestDto) {
    this.form.setValue({
      'title': todoList.title,
      'description': todoList.description,
    });
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
    this.presenter.update();
    this.router.navigate([ TODO_LIST_ROUTE, ]);
  }

  private buildForm() : FormGroup {
    return this.builder.group({
      'title': this.builder.control('', Validators.required),
      'description': '',
    });
  }
}
