import { Component, OnInit, } from '@angular/core';

import { AddTodoListTaskRequestDto, } from '../../models';
import { AddTodoListTaskView,       } from './add-todo-list-task.view';

@Component({
  selector: 'app-add-todo-list-task',
  templateUrl: './add-todo-list-task.component.html',
  styleUrls: ['./add-todo-list-task.component.scss']
})
export class AddTodoListTaskComponent implements OnInit, AddTodoListTaskView {
  private datasourceValue: AddTodoListTaskRequestDto | undefined;

  public constructor() { }

  public ngOnInit(): void {
  }

  public get datasource(): AddTodoListTaskRequestDto {
    return this.datasource ?? (this.datasourceValue = this.createEmptyTodoListTask());
  }

  private createEmptyTodoListTask(): AddTodoListTaskRequestDto {
    return new AddTodoListTaskRequestDto('', '', '');
  }
}
