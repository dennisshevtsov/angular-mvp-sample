import { Component, OnInit,                } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';
import { FormBuilder, FormGroup,           } from '@angular/forms';

import { TodoListService,
         UpdateTodoListRequestDto, } from '../../api';
import { UpdateTodoListView,       } from './update-todo-list.view';
import { UpdateTodoListPresenter,  } from './update-todo-list.presenter';
import { TODO_LIST_ROUTE_BASE,     } from '../../todo-list-routing.module';

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
    private readonly formBuilder: FormBuilder,

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

  public onSubmit(): void {
    this.presenter.update();
    this.navigateToSearchTodoLists();
  }

  public onCancel(): void {
    this.navigateToSearchTodoLists();
  }

  private navigateToSearchTodoLists(): void {
    this.router.navigate([
      TODO_LIST_ROUTE_BASE,
    ]);
  }

  private buildForm() : FormGroup {
    return this.formBuilder.group({
      'title': '',
      'description': '',
    });
  }
}
