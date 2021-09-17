import { Component, OnInit,                } from '@angular/core';
import { FormBuilder, FormGroup,           } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';

import { GetTodoListResponseDto,
         TodoListService,           } from '../../../api';
import { TODO_LIST_ROUTE_BASE,      } from '../../../routing';
import { AddTodoListTaskRequestDto,
         TodoListTaskService,       } from '../../api';
import { AddTodoListTaskPresenter,  } from './add-todo-list-task.presenter';
import { AddTodoListTaskView,       } from './add-todo-list-task.view';

@Component({
  selector: 'app-add-todo-list-task',
  templateUrl: './add-todo-list-task.component.html',
  styleUrls: [
    './add-todo-list-task.component.scss',
  ],
})
export class AddTodoListTaskComponent implements OnInit, AddTodoListTaskView {
  private readonly presenter: AddTodoListTaskPresenter;

  private todoListValue: GetTodoListResponseDto | undefined;
  private todoListTaskIdValue: number | undefined;

  private formValue: FormGroup | undefined;

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,

    private readonly builder: FormBuilder,

    todoListService: TodoListService,
    todoListTaskService: TodoListTaskService,
  ) {
    this.presenter = new AddTodoListTaskPresenter(
      this, todoListService, todoListTaskService);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoListId = paramMap.get('todoListId');

      if (todoListId) {
        this.todoList.todoListId = +todoListId;
        this.todoListTask.todoListId = +todoListId;

        this.presenter.load();
      }
    });
  }

  public get todoList(): GetTodoListResponseDto {
    return this.todoListValue ?? (this.todoListValue = new GetTodoListResponseDto(0, '', ''));
  }

  public set todoList(todoList: GetTodoListResponseDto) {
    this.todoListValue = todoList;
  }

  public get todoListTask(): AddTodoListTaskRequestDto {
    return new AddTodoListTaskRequestDto(
      this.todoList.todoListId,
      this.form.value.title,
      this.form.value.description,
      this.form.value.startDate,
      this.form.value.deadline,
    );
  }

  public get todoListTaskId(): number {
    return this.todoListTaskIdValue ?? (this.todoListTaskIdValue = 0);
  }

  public set todoListTaskId(todoListTaskId: number) {
    this.todoListTaskIdValue = todoListTaskId;
  }

  public get form(): FormGroup {
    return this.formValue ?? (this.formValue = this.buildForm());
  }

  public onSubmit(): void {
    this.presenter.add();
    this.onNavigateToSearchTodoListTasks();
  }

  public onCancel(): void {
    this.onNavigateToSearchTodoListTasks();
  }

  public onNavigateToSearchTodoLists(): void {
    this.router.navigate([
      TODO_LIST_ROUTE_BASE,
    ]);
  }

  public onNavigateToGetTodoList(): void {
    this.router.navigate([
      TODO_LIST_ROUTE_BASE,
      this.todoList.todoListId,
    ]);
  }

  public onNavigateToSearchTodoListTasks(): void {
    const link = [
      '../task'
    ];
    const extras = {
      relativeTo: this.route,
    };

    this.router.navigate(link, extras);
  }

  private buildForm(): FormGroup {
    return this.builder.group({
      'title': '',
      'description': '',
      'startDate': '',
      'deadline': '',
    });
  }
}
