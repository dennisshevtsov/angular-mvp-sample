import { formatDate,                         } from '@angular/common';
import { Component, OnInit,                  } from '@angular/core';
import { AbstractControlOptions,
         FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router,   } from '@angular/router';

import { FormComponentBase,         } from '../../../../core';
import { TodoListService,           } from '../../../api';
import { TODO_LIST_PARAMETER,
         TODO_LIST_ROUTE,           } from '../../../routing';
import { AddTodoListTaskRequestDto,
         TodoListTaskService,
         TodoListTaskTimeDto,       } from '../../api';
import { TODO_LIST_TASK_ROUTE,      } from '../../routing';
import { timePeriodValidator,       } from '../../validators';
import { AddTodoListTaskPresenter,  } from './add-todo-list-task.presenter';
import { AddTodoListTaskView,       } from './add-todo-list-task.view';

@Component({
  selector: 'app-add-todo-list-task',
  templateUrl: './add-todo-list-task.component.html',
  styleUrls: [
    './add-todo-list-task.component.scss',
  ],
})
export class AddTodoListTaskComponent
  extends FormComponentBase
  implements OnInit, AddTodoListTaskView {
  private readonly presenter: AddTodoListTaskPresenter;

  private todoListIdValue: number | undefined;

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,

    private readonly builder: FormBuilder,

    todoListService: TodoListService,
    todoListTaskService: TodoListTaskService,
  ) {
    super();

    this.presenter = new AddTodoListTaskPresenter(
      this, todoListService, todoListTaskService);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoListId = paramMap.get(TODO_LIST_PARAMETER);

      if (todoListId) {
        this.todoListIdValue = +todoListId;
      }
    });
  }

  public get datasource(): AddTodoListTaskRequestDto {
    return new AddTodoListTaskRequestDto(
      this.todoListIdValue!,
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

  public get searchTodoListsLink(): Array<any> {
    return [ '/', TODO_LIST_ROUTE, ];
  }

  public onSubmit(): void {
    this.validateForm();

    if (this.form.valid) {
      this.presenter.add();
      this.router.navigate([
        TODO_LIST_ROUTE,
        this.todoListIdValue!,
        TODO_LIST_TASK_ROUTE,
      ]);
    }
  }

  protected buildForm(): FormGroup {
    const now = Date.now();

    return this.builder.group({
      'title': this.builder.control('', Validators.required),
      'date': this.builder.control(formatDate(now, 'yyyy-MM-dd', 'en-US'), Validators.required),
      'time': this.buildTimePeriodGroup(now),
      'description': '',
    });
  }

  private buildTimePeriodGroup(now: number): FormGroup {
    const controlConfig = {
      'fullDay': false,
      'start': formatDate(now, 'hh:mm', 'en-US'),
      'end': formatDate(now + 1 * 60 * 60 * 1000, 'hh:mm', 'en-US'),
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
