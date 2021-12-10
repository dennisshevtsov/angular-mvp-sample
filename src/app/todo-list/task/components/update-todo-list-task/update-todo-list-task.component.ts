import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { ActivatedRoute, ParamMap, Router,     } from '@angular/router';
import { AbstractControlOptions, FormBuilder,
         FormGroup, Validators,                } from '@angular/forms';

import { GetTodoListResponseDto,       } from '../../../api';
import { TODO_LIST_ROUTE,
         TODO_LIST_PARAMETER,          } from '../../../routing';
import { UpdateTodoListTaskRequestDto,
         TodoListTaskService,
         TodoListTaskTimeDto,          } from '../../api';
import { TODO_LIST_TASK_PARAMETER,
         TODO_LIST_TASK_ROUTE,         } from '../../routing';
import { timePeriodValidator,          } from '../../validators';
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
    private readonly builder: FormBuilder,

    todoListTaskService: TodoListTaskService,
  ) {
    this.presenter = new UpdateTodoListTaskPresenter(
      this, todoListTaskService);
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
      this.form.value.description,
      this.form.value.date,
      new TodoListTaskTimeDto(
        this.form.value.time.fullDay,
        this.form.value.time.start,
        this.form.value.time.end,
      ),
    );
  }

  public set datasource(todoListTask: UpdateTodoListTaskRequestDto) {
    this.form.setValue({
      'title': todoListTask.title,
      'date': todoListTask.date,
      'time': {
        'fullDay': todoListTask.time.fullDay,
        'start': todoListTask.time.start,
        'end': todoListTask.time.end,
      },
      'description': todoListTask.description,
    });
  }

  public get form(): FormGroup {
    return this.formValue ?? (this.formValue = this.buildForm());
  }

  public isValid(controlName: string): boolean {
    const control = this.form.get(controlName);

    return control == null || !(control.touched || control.dirty) || control.valid;
  }

  public hasErrors(controlName: string): boolean {
    const control = this.form.get(controlName);

    return control != null && (control.touched || control.dirty) && control.errors != null;
  }

  public hasError(controlName: string, errorCode: string): boolean {
    const control = this.form.get(controlName);

    return control != null && control.hasError(errorCode);
  }

  public get searchTodoListsLink(): Array<any> {
    return [ '/', TODO_LIST_ROUTE, ];
  }

  public get searchTodoListTasksLink(): Array<any> {
    return [
      '/',
      TODO_LIST_ROUTE,
      this.todoList.todoListId,
      TODO_LIST_TASK_ROUTE,
    ];
  }

  public onSubmit(): void {
    this.validateForm();

    if (this.form.valid) {
      this.presenter.update();
      this.router.navigate([
        TODO_LIST_ROUTE,
        this.todoList.todoListId,
        TODO_LIST_TASK_ROUTE,
      ]);
    }
  }

  private buildForm(): FormGroup {
    const now = Date.now();

    return this.builder.group({
      'title': this.builder.control('', Validators.required),
      'date': this.builder.control('', Validators.required),
      'time': this.buildTimePeriodGroup(now),
      'description': '',
    });
  }

  private buildTimePeriodGroup(now: number): FormGroup {
    const controlConfig = {
      'fullDay': false,
      'start': '',
      'end': '',
    };
    const options: AbstractControlOptions = {
      validators: [
        timePeriodValidator,
      ],
    };

    return this.builder.group(controlConfig, options);
  }

  private validateForm(): void {
    this.validateFormGroup(this.form);
  }

  private validateFormGroup(formGroup: FormGroup): void {
    Object.keys(formGroup.controls)
          .forEach(controlName => {
            const control = formGroup.get(controlName)!;

            control.markAsTouched({
              onlySelf: true,
            });
            control.updateValueAndValidity();

            if (control instanceof FormGroup) {
              this.validateFormGroup(control);
            }
          })
  }
}
