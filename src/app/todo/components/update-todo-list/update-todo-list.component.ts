import { Component, OnInit, } from '@angular/core';

import { UpdateTodoListView, } from '../../views';

@Component({
  selector: 'app-update-todo-list',
  templateUrl: './update-todo-list.component.html',
  styleUrls: ['./update-todo-list.component.scss']
})
export class UpdateTodoListComponent implements OnInit, UpdateTodoListView {
  public constructor() { }

  public ngOnInit(): void {
  }
}
