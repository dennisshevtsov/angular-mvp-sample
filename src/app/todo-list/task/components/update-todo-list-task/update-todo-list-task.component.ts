import { Component, OnInit,                   } from '@angular/core';
import { ActivatedRoute, ParamMap,            } from '@angular/router';
import { AbstractControlOptions, FormBuilder,
         FormGroup, Validators,               } from '@angular/forms';

import { FormComponentBase,            } from '../../../../core';
import { GetTodoListResponseDto,       } from '../../../api';
import { TODO_LIST_ID_PARAMETER,
         TodoListLinks,                } from '../../../routing';
import { UpdateTodoListTaskRequestDto,
         TodoListTaskService,
         TodoListTaskTimeDto,          } from '../../api';
import { TodoListTaskLinks,
         TodoListTaskNavigator,
         TODO_LIST_TASK_ID_PARAMETER,  } from '../../routing';
import { timePeriodValidator,          } from '../../validators';
import { UpdateTodoListTaskPresenter,  } from './update-todo-list-task.presenter';
import { UpdateTodoListTaskView,       } from './update-todo-list-task.view';

@Component({
  templateUrl: './update-todo-list-task.component.html',
  styleUrls: [
    './update-todo-list-task.component.scss',
  ],
})
export class UpdateTodoListTaskComponent
  extends FormComponentBase
  implements OnInit, UpdateTodoListTaskView {
  private readonly presenter: UpdateTodoListTaskPresenter;

  private todoListValue: GetTodoListResponseDto | undefined;
  private todoListTaskIdValue: number | undefined;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly builder: FormBuilder,

    private readonly todoListLinks: TodoListLinks,
    private readonly todoListTaskLinks: TodoListTaskLinks,
    private readonly navigator: TodoListTaskNavigator,

    todoListTaskService: TodoListTaskService,
  ) {
    super();

    this.presenter = new UpdateTodoListTaskPresenter(
      this, todoListTaskService);
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoListId = paramMap.get(TODO_LIST_ID_PARAMETER);
      const todoListTaskId = paramMap.get(TODO_LIST_TASK_ID_PARAMETER);

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

  public get homeLink(): Array<any> {
    return this.todoListLinks.searchTodoListsLink();
  }

  public get backLink(): Array<any> {
    return this.todoListTaskLinks.searchTodoListTasksLink(this.todoList.todoListId);
  }

  public onSubmit(): void {
    this.validateForm();

    if (this.form.valid) {
      this.presenter.update();
      this.navigator.navigateToSearchTodoListTasks(
        this.todoList.todoListId);
    }
  }

  private buildTimePeriodGroup(): FormGroup {
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

  protected buildForm(): FormGroup {
    return this.builder.group({
      'title': this.builder.control('', Validators.required),
      'date': this.builder.control('', Validators.required),
      'time': this.buildTimePeriodGroup(),
      'description': '',
    });
  }
}
