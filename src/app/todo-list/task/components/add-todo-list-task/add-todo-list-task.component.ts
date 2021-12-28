import { Component, OnInit,                  } from '@angular/core';
import { AbstractControlOptions,
         FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router,   } from '@angular/router';

import { AppClock, Formatter,
         FormComponentBase,
         MILLISECONDS_IN_HOUR,      } from '../../../../core';
import { TodoListService,           } from '../../../api';
import { TodoListLinks,
         TODO_LIST_ID_PARAMETER,
         TODO_LIST_ROUTE,           } from '../../../routing';
import { AddTodoListTaskRequestDto,
         TodoListTaskService,
         TodoListTaskDateDto,       } from '../../api';
import { TodoListTaskLinks,
         TODO_LIST_TASK_ROUTE,      } from '../../routing';
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

    private readonly clock: AppClock,
    private readonly formatter: Formatter,
    private readonly todoListLinks: TodoListLinks,
    private readonly todoListTaskLinks: TodoListTaskLinks,

    todoListService: TodoListService,
    todoListTaskService: TodoListTaskService,
  ) {
    super();

    this.presenter = new AddTodoListTaskPresenter(
      this, todoListService, todoListTaskService);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoListId = paramMap.get(TODO_LIST_ID_PARAMETER);

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
      new TodoListTaskDateDto(
        this.formatter.fromLocalDate(this.form.value.date.day),
        this.form.value.date.fullDay,
        this.formatter.fromLocalTime(this.form.value.date.start),
        this.formatter.fromLocalTime(this.form.value.date.end),
      ),
    );
  }

  public get homeLink(): Array<any> {
    return this.todoListLinks.searchTodoListsLink();
  }

  public get backLink(): Array<any> {
    return this.todoListTaskLinks.searchTodoListTasksLink(this.todoListIdValue!);
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

  private buildTimePeriodGroup(now: number): FormGroup {
    const start = now;
    const end = start + MILLISECONDS_IN_HOUR;

    const controlConfig = {
      'day': this.builder.control(this.formatter.toLocalDate(now), Validators.required),
      'fullDay': false,
      'start': this.formatter.toLocalTime(start),
      'end': this.formatter.toLocalTime(end),
    };
    const options: AbstractControlOptions = {
      validators: [
        timePeriodValidator,
      ],
    };

    return this.builder.group(controlConfig, options);
  }

  protected buildForm(): FormGroup {
    const now = this.clock.now();

    return this.builder.group({
      'title': this.builder.control('', Validators.required),
      'date': this.buildTimePeriodGroup(now),
      'description': '',
    });
  }
}
