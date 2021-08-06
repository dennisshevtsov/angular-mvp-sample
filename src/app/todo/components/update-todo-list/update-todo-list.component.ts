import { Component, OnInit,        } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';
import { FormBuilder, FormGroup,              } from '@angular/forms';

import { TodoListService,          } from '../../services/todo-list.service';
import { UpdateTodoListView,       } from './update-todo-list.view';
import { UpdateTodoListPresenter,  } from './update-todo-list.presenter';
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

  private _form: FormGroup | undefined;
  private _datasource: UpdateTodoListRequestDto | undefined;

  public constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _formBuilder: FormBuilder,

    service: TodoListService,
  ) {
    this._presenter = new UpdateTodoListPresenter(this, service);
  }

  public ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoListId: string | null = paramMap.get('todoListId');

      if (todoListId) {
        this.datasource.todoListId = todoListId;
        this.load();
      }
    });
  }

  public get form(): FormGroup {
    return this._form ?? (this._form = this.buildForm());
  }

  public set datasource(datasource: UpdateTodoListRequestDto) {
    this._datasource = datasource;
  }

  public get datasource(): UpdateTodoListRequestDto {
    return this._datasource ?? (this._datasource = new UpdateTodoListRequestDto());
  }

  public onSubmit(): void {
    this._presenter.update();
  }

  public onCancel(): void {
    this._router.navigate([
      'todo-list',
    ]);
  }

  private load(): void {
    this._presenter.load();
    this._form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this._formBuilder.group({
      title: this.datasource.title,
      description: this.datasource.description,
    });
  }
}
