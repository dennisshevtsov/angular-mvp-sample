import { Component, OnInit, } from '@angular/core';

import { UpdateTodoListTaskView,       } from './update-todo-list-task.view';
import { UpdateTodoListTaskRequestDto, } from '../../models';
import { TodoListTaskService,          } from '../../services';
import { UpdateTodoListTaskPresenter,  } from './update-todo-list-task.presenter';

@Component({
  selector: 'app-update-todo-list-task',
  templateUrl: './update-todo-list-task.component.html',
  styleUrls: [
    './update-todo-list-task.component.scss',
  ],
})
export class UpdateTodoListTaskComponent implements OnInit, UpdateTodoListTaskView {
  private readonly presenter: UpdateTodoListTaskPresenter;

  private datasourceValue: UpdateTodoListTaskRequestDto | undefined;

  public constructor(
    service: TodoListTaskService,
  ) {
    this.presenter = new UpdateTodoListTaskPresenter(this, service);
  }

  public ngOnInit(): void {
  }

  public get datasource(): UpdateTodoListTaskRequestDto {
    return this.datasourceValue ?? new UpdateTodoListTaskRequestDto('', '', '', '', '', '');
  }

  public onSubmit(): void {
    this.presenter.update();
  }
}
