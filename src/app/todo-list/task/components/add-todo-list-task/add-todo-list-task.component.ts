import { Component, OnInit,                } from '@angular/core';
import { FormBuilder, FormGroup,           } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';

import { TodoListService,           } from '../../../api';
import { AddTodoListTaskRequestDto,
         TodoListTaskService,       } from '../../api';
import { AddTodoListTaskPresenter,  } from './add-todo-list-task.presenter';
import { AddTodoListTaskView,       } from './add-todo-list-task.view';

@Component({
  selector: 'app-add-todo-list-task',
  templateUrl: './add-todo-list-task.component.html',
  styleUrls: [
    './add-todo-list-task.component.scss',
  ],
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
      const todoListId = paramMap.get('todoListId');

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
      this.form.value.fullDay,
      this.form.value.startTime,
      this.form.value.endTime,
      this.form.value.description,
    );
  }

  public get form(): FormGroup {
    return this.formValue ?? (this.formValue = this.buildForm());
  }

  public onSubmit(): void {
    this.presenter.add();
    this.navigateToSearchTodoListTasks();
  }

  public onBack(): void {
    this.navigateToSearchTodoListTasks();
  }

  private navigateToSearchTodoListTasks(): void {
    const link = [
      '../',
    ];
    const extras = {
      relativeTo: this.route,
    };

    this.router.navigate(link, extras);
  }

  private buildForm(): FormGroup {
    return this.builder.group({
      'title': '',
      'date': '',
      'fullDay': false,
      'startTime': '',
      'endTime': '',
      'description': '',
    });
  }
}
