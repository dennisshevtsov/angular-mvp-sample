import { Component, OnInit, } from '@angular/core';
import { Router, } from '@angular/router';

import { GetTodoListRecordResponseDto, } from '../../models';

@Component({
  selector: 'app-search-todo-lists',
  templateUrl: './search-todo-lists.component.html',
  styleUrls: [
    './search-todo-lists.component.scss',
  ],
})
export class SearchTodoListsComponent implements OnInit {
  private todoLists: GetTodoListRecordResponseDto[] | undefined;

  public constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.todoLists = [
      new GetTodoListRecordResponseDto('49d0a40f-28ed-4332-9335-f55735476b7f', 'test'),
      new GetTodoListRecordResponseDto('c3b3125f-b002-48f0-bc13-ab12e6609f42', 'test'),
      new GetTodoListRecordResponseDto('53eba009-1efc-4885-8bc7-d2478e9f7bb7', 'test'),
      new GetTodoListRecordResponseDto('35817714-faa2-4f20-8e03-2f32d3ddb667', 'test'),
      new GetTodoListRecordResponseDto('be10e857-d057-4dbf-bf48-8ea7e02597c9', 'test'),
    ];
  }

  public get Items(): GetTodoListRecordResponseDto[] {
    if (this.todoLists) {
      return this.todoLists;
    }

    return [];
  }

  public onNavigateToUpdate(todoListId: string): void {
    this.router.navigate([
      'todo-list',
      todoListId,
    ]);
  }
}
