import { Component, OnInit,                } from '@angular/core';
import { FormBuilder, FormGroup,           } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';

import { GetTodoListResponseDto,    } from '../../../todo-list/models';
import { AddTodoListTaskPresenter,  } from './add-todo-list-task.presenter';
import { AddTodoListTaskView,       } from './add-todo-list-task.view';
import { AddTodoListTaskRequestDto, } from '../../models';
import { TodoListTaskService,       } from '../../services';

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

    service: TodoListTaskService,
  ) {
    this.presenter = new AddTodoListTaskPresenter(this, service);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoListId = paramMap.get('todoListId');

      if (todoListId) {
        this.todoList.todoListId = +todoListId;
        this.todoListTask.todoListId = +todoListId;
      }
    });
  }

  public get todoList(): GetTodoListResponseDto {
    return this.todoListValue ?? (this.todoListValue = new GetTodoListResponseDto(0, '', ''));
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

  public onNavigateToSearchTodoLists(): void {}

  public onNavigateToGetTodoList(): void {}

  public onNavigateToSearchTodoListTasks(): void {
    this.router.navigate([
      'todo-list',
      this.todoList.todoListId,
      'task',
    ]);
  }

  private createEmptyTodoListTask(): AddTodoListTaskRequestDto {
    return new AddTodoListTaskRequestDto(0, '', '', '', '');
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
