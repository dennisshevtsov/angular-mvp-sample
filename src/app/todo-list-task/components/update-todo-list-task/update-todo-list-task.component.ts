import { Component, OnInit, } from '@angular/core';

import { UpdateTodoListTaskView,       } from './update-todo-list-task.view';
import { UpdateTodoListTaskRequestDto, } from '../../models';
import { TodoListTaskService,          } from '../../services';
import { UpdateTodoListTaskPresenter,  } from './update-todo-list-task.presenter';
import { GetTodoListResponseDto,       } from '../../../todo-list/models';

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

  public constructor(
    service: TodoListTaskService,
  ) {
    this.presenter = new UpdateTodoListTaskPresenter(this, service);
  }

  public ngOnInit(): void {
  }

  public get todoList(): GetTodoListResponseDto {
    return this.todoListValue ?? (this.todoListValue = new GetTodoListResponseDto(0, '', ''));
  }

  public get todoListTask(): UpdateTodoListTaskRequestDto {
    return this.todoListTaskValue ?? (this.todoListTaskValue = new UpdateTodoListTaskRequestDto(0, 0, '', '', '', ''));
  }

  public onSubmit(): void {
    this.presenter.update();
  }
}
