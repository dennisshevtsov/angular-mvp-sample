import { Component, OnInit, } from '@angular/core';

import { AddTodoListView, } from '../../views';

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.scss']
})
export class AddTodoListComponent implements OnInit, AddTodoListView {
  public constructor() { }

  public ngOnInit(): void {
  }
}
