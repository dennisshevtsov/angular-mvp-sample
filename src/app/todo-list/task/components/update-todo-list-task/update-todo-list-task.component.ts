import { Component, OnInit,                } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';
import { FormBuilder, FormGroup,           } from '@angular/forms';

import { GetTodoListResponseDto,       } from '../../../api';
import { TODO_LIST_ROUTE,
         TODO_LIST_PARAMETER,          } from '../../../routing';
import { UpdateTodoListTaskRequestDto,
         TodoListTaskService,          } from '../../api';
import { UpdateTodoListTaskPresenter,  } from './update-todo-list-task.presenter';
import { UpdateTodoListTaskView,       } from './update-todo-list-task.view';
import { TODO_LIST_TASK_PARAMETER, TODO_LIST_TASK_ROUTE,     } from '../../routing';

@Component({
  templateUrl: './update-todo-list-task.component.html',
  styleUrls: [
    './update-todo-list-task.component.scss',
  ],
})
export class UpdateTodoListTaskComponent implements OnInit, UpdateTodoListTaskView {
  private readonly presenter: UpdateTodoListTaskPresenter;

  private todoListValue: GetTodoListResponseDto | undefined;
  private todoListTaskIdValue: number | undefined;
  private formValue: FormGroup | undefined;

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,

    todoListTaskService: TodoListTaskService,
  ) {
    this.presenter = new UpdateTodoListTaskPresenter(
      this,
      todoListTaskService);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoListId = paramMap.get(TODO_LIST_PARAMETER);
      const todoListTaskId = paramMap.get(TODO_LIST_TASK_PARAMETER);

      if (todoListId && todoListTaskId) {
        this.todoList.todoListId = +todoListId;
        this.todoListTaskIdValue = +todoListTaskId;

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

  public get datasource(): UpdateTodoListTaskRequestDto {
    return new UpdateTodoListTaskRequestDto(
      this.todoList.todoListId,
      this.todoListTaskIdValue,
      this.form.value.title,
      this.form.value.date,
      this.form.value.fullDay,
      this.form.value.startDate,
      this.form.value.endDate,
      this.form.value.description,
    );
  }

  public set datasource(todoListTask: UpdateTodoListTaskRequestDto) {
    this.form.setValue({
      'title': todoListTask.title,
      'date': todoListTask.date,
      'fullDay': todoListTask.fullDay,
      'startTime': todoListTask.startTime,
      'endTime': todoListTask.endTime,
      'description': todoListTask.description,
    });
  }

  public get form(): FormGroup {
    return this.formValue ?? (this.formValue = this.buildForm());
  }

  public onSubmit(): void {
    this.presenter.update();
    this.navigateToSearchTodoListTasks();
  }

  public onBack(): void {
    this.navigateToSearchTodoListTasks();
  }

  private navigateToSearchTodoListTasks(): void {
    this.router.navigate([
      TODO_LIST_ROUTE,
      this.todoList.todoListId,
      TODO_LIST_TASK_ROUTE,
    ]);
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      'title': '',
      'date': '',
      'fullDay': false,
      'startTime': '',
      'endTime': '',
      'description': '',
    });
  }
}
