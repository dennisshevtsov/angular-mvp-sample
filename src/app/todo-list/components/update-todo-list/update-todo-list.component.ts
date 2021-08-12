import { Component, OnInit,                } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';
import { FormBuilder, FormGroup,           } from '@angular/forms';

import { TodoListService,          } from '../../services';
import { UpdateTodoListView,       } from './update-todo-list.view';
import { UpdateTodoListPresenter,  } from './update-todo-list.presenter';
import { UpdateTodoListRequestDto, } from '../../models';

@Component({
  templateUrl: './update-todo-list.component.html',
  styleUrls: [
    './update-todo-list.component.scss',
  ],
})
export class UpdateTodoListComponent implements OnInit, UpdateTodoListView {
  private readonly presenter: UpdateTodoListPresenter;

  private formValue: FormGroup | undefined;
  private datasourceValue: UpdateTodoListRequestDto | undefined;

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,

    service: TodoListService,
  ) {
    this.presenter = new UpdateTodoListPresenter(this, service);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoListId: string | null = paramMap.get('todoListId');

      if (todoListId) {
        this.datasource.todoListId = todoListId;
        this.load();
      }
    });
  }

  public get form(): FormGroup {
    return this.formValue ?? (this.formValue = this.buildForm());
  }

  public set datasource(datasource: UpdateTodoListRequestDto) {
    this.datasourceValue = datasource;
  }

  public get datasource(): UpdateTodoListRequestDto {
    return this.datasourceValue ?? (this.datasourceValue = new UpdateTodoListRequestDto());
  }

  public onSubmit(): void {
    this.presenter.update();
  }

  public onCancel(): void {
    this.router.navigate([
      'todo-list',
    ]);
  }

  private load(): void {
    this.presenter.load();
    this.formValue = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      title: this.datasource.title,
      description: this.datasource.description,
    });
  }
}
