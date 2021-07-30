import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';

import { TodoRoutingModule, } from './todo-routing.module';
import {
  AddTodoListComponent,
  UpdateTodoListComponent,
  SearchTodoListsComponent,
} from './components';

@NgModule({
  declarations: [
    AddTodoListComponent,
    UpdateTodoListComponent,
    SearchTodoListsComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
  ],
})
export class TodoModule {
}
