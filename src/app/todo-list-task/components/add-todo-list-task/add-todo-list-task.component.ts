import { Component, OnInit,                } from '@angular/core';
import { FormBuilder, FormGroup,           } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';

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

  private todoListTaskIdValue: string | undefined;
  private datasourceValue: AddTodoListTaskRequestDto | undefined;

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
      if (paramMap.has('todoListId')) {
        this.datasource.todoListId = paramMap.get('todoListId')!;
      }
    });
  }

  public get todoListTaskId(): string {
    return this.todoListTaskIdValue ?? (this.todoListTaskIdValue = '');
  }

  public set todoListTaskId(todoListTaskId: string) {
    this.todoListTaskIdValue = todoListTaskId;
  }

  public get datasource(): AddTodoListTaskRequestDto {
    return this.datasourceValue ?? (this.datasourceValue = this.createEmptyTodoListTask());
  }

  public get form(): FormGroup {
    return this.formValue ?? (this.formValue = this.buildForm());
  }

  public onSubmit(): void {
    this.presenter.add();
    this.router.navigate([
      'todo-list',
      this.datasource.todoListId,
      'task',
      this.todoListTaskId,
    ]);
  }

  public onCancel(): void {
    this.router.navigate([
      'todo-list',
      this.datasource.todoListId,
      'task',
    ]);
  }

  private createEmptyTodoListTask(): AddTodoListTaskRequestDto {
    return new AddTodoListTaskRequestDto('', '', '');
  }

  private buildForm(): FormGroup {
    return this.builder.group({
      'title': '',
      'description': '',
      'start': '',
      'deadline': '',
    });
  }
}
