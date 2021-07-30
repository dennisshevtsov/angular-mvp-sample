import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';

import { TodoRoutingModule, } from './todo-routing.module';
import {
  AddTodoListComponent,
  UpdateTodoListComponent,
  DeleteTodoListComponent,
  SearchTodoListsComponent,
  GetTodoListComponent,
} from './components';

@NgModule({
  declarations: [
    AddTodoListComponent,
    UpdateTodoListComponent,
    DeleteTodoListComponent,
    SearchTodoListsComponent,
    GetTodoListComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
  ],
})
export class TodoModule {
}
