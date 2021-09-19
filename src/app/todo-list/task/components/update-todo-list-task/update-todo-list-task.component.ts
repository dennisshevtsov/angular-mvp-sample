import { Component, OnInit,                } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';
import { FormBuilder, FormGroup,           } from '@angular/forms';

import { GetTodoListResponseDto,
         TodoListService,              } from '../../../api';
import { TODO_LIST_ROUTE_BASE,         } from '../../../routing';
import { UpdateTodoListTaskRequestDto,
         TodoListTaskService,          } from '../../api';
import { UpdateTodoListTaskPresenter,  } from './update-todo-list-task.presenter';
import { UpdateTodoListTaskView,       } from './update-todo-list-task.view';

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

  public get todoListTask(): UpdateTodoListTaskRequestDto {
    return new UpdateTodoListTaskRequestDto(
      this.todoList.todoListId,
      this.todoListTaskIdValue,
      this.form.value.title,
      this.form.value.description,
      this.form.value.startDate,
      this.form.value.deadline,
    );
  }

  public set todoListTask(todoListTask: UpdateTodoListTaskRequestDto) {
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
    this.navigateToSearchTodoListTasks();
  }

  public onCancel(): void {
    this.navigateToSearchTodoListTasks();
  }

  private navigateToSearchTodoListTasks(): void {
    this.router.navigate([
      TODO_LIST_ROUTE_BASE,
      this.todoList.todoListId,
      'task',
    ]);
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      'title': '',
      'description': '',
      'startDate': '',
      'deadline': '',
    });
  }
}
