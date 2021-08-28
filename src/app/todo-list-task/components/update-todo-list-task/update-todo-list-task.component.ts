import { Component, OnInit,        } from '@angular/core';
import { ActivatedRoute, ParamMap, } from '@angular/router';
import { FormBuilder, FormGroup,   } from '@angular/forms';

import { GetTodoListResponseDto,       } from '../../../todo-list/models';
import { TodoListService,              } from '../../../todo-list/services';
import { UpdateTodoListTaskPresenter,  } from './update-todo-list-task.presenter';
import { UpdateTodoListTaskView,       } from './update-todo-list-task.view';
import { UpdateTodoListTaskRequestDto, } from '../../models';
import { TodoListTaskService,          } from '../../services';

@Component({
  templateUrl: './update-todo-list-task.component.html',
  styleUrls: [
    './update-todo-list-task.component.scss',
  ],
})
export class UpdateTodoListTaskComponent implements OnInit, UpdateTodoListTaskView {
  private readonly presenter: UpdateTodoListTaskPresenter;

  private todoListValue: GetTodoListResponseDto | undefined;
  private todoListTaskId: number | undefined;
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
        this.todoListTaskId = +todoListId;

        this.presenter.load();
      }
    });
  }

  public get todoList(): GetTodoListResponseDto {
    return this.todoListValue ?? (this.todoListValue = new GetTodoListResponseDto());
  }

  public set todoList(todoList: GetTodoListResponseDto) {
    this.todoList.title = todoList.title;
    this.todoList.description = todoList.description;
  }

  public get todoListTask(): UpdateTodoListTaskRequestDto {
    return new UpdateTodoListTaskRequestDto(
      this.todoList.todoListId,
      this.todoListTaskId,
    );
  }

  public set todoListTask(todoListTask: UpdateTodoListTaskRequestDto) {
    this.todoListTaskId = todoListTask.todoListTaskId;

    this.form.setValue({
      'title': todoListTask.title,
      'description': todoListTask.description,
      'startDate': todoListTask.startDate,
      'deadline': todoListTask.deadline,
    });
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
