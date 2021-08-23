import { Component, OnInit,        } from '@angular/core';
import { ActivatedRoute, ParamMap, } from '@angular/router';

import { GetTodoListResponseDto,       } from '../../../todo-list/models';
import { TodoListService,              } from '../../../todo-list/services';
import { UpdateTodoListTaskPresenter,  } from './update-todo-list-task.presenter';
import { UpdateTodoListTaskView,       } from './update-todo-list-task.view';
import { UpdateTodoListTaskRequestDto, } from '../../models';
import { TodoListTaskService,          } from '../../services';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './update-todo-list-task.component.html',
  styleUrls: [
    './update-todo-list-task.component.scss',
  ],
})
export class UpdateTodoListTaskComponent implements OnInit, UpdateTodoListTaskView {
  private readonly presenter: UpdateTodoListTaskPresenter;

  private todoListValue: GetTodoListResponseDto | undefined;
  private todoListTaskValue: UpdateTodoListTaskRequestDto | undefined;
  private formValue: FormGroup | undefined;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,

    todoListService: TodoListService,
    todoListTaskService: TodoListTaskService,
  ) {
    this.presenter = new UpdateTodoListTaskPresenter(
      this,
      todoListService,
      todoListTaskService);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoListId = paramMap.get('todoListId');
      const todoListTaskId = paramMap.get('todoListTaskId');

      if (todoListId && todoListTaskId) {
        this.todoList.todoListId = +todoListId;
        this.todoListTask.todoListId = +todoListId;
        this.todoListTask.todoListTaskId = +todoListTaskId;

        this.presenter.load();
      }
    });
  }

  public get todoList(): GetTodoListResponseDto {
    return this.todoListValue ?? (this.todoListValue = new GetTodoListResponseDto(0, '', ''));
  }

  public get todoListTask(): UpdateTodoListTaskRequestDto {
    return this.todoListTaskValue ?? (this.todoListTaskValue = new UpdateTodoListTaskRequestDto(0, 0, '', '', '', ''));
  }

  public get form(): FormGroup {
    return this.formValue ?? (this.formValue = this.buildForm());
  }

  public onSubmit(): void {
    this.presenter.update();
  }

  public onCancel(): void {}

  public onNavigateToSearchTodoLists(): void {}

  public onNavigateToGetTodoList(): void {}

  public onNavigateToSearchTodoListTasks(): void {}

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      'title': '',
      'description': '',
      'startDate': '',
      'deadline': '',
    });
  }
}
