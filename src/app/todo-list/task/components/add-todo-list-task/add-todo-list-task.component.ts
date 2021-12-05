import { formatDate,                           } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { AbstractControlOptions, FormBuilder,
         FormGroup, Validators,                } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router,     } from '@angular/router';

import { TodoListService,           } from '../../../api';
import { TODO_LIST_PARAMETER,
         TODO_LIST_ROUTE,           } from '../../../routing';
import { AddTodoListTaskRequestDto,
         TodoListTaskService,       } from '../../api';
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
  encapsulation: ViewEncapsulation.None,
})
export class AddTodoListTaskComponent implements OnInit, AddTodoListTaskView {
  private readonly presenter: AddTodoListTaskPresenter;

  private todoListIdValue: number | undefined;
  private formValue: FormGroup | undefined;

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,

    private readonly builder: FormBuilder,

    todoListService: TodoListService,
    todoListTaskService: TodoListTaskService,
  ) {
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
      this.form.value.date,
      this.form.value.time.fullDay,
      this.form.value.time.start,
      this.form.value.time.end,
      this.form.value.description,
    );
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

  public onSubmit(): void {
    this.presenter.add();
    this.router.navigate([
      TODO_LIST_ROUTE,
      this.todoListIdValue!,
      TODO_LIST_TASK_ROUTE,
    ]);
  }

  private buildForm(): FormGroup {
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
}
