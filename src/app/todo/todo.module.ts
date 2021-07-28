import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';

import { TodoRoutingModule, } from './todo-routing.module';
import { AddTodoListComponent, } from './components/add-todo-list/add-todo-list.component';
import { UpdateTodoListComponent, } from './components/update-todo-list/update-todo-list.component';
import { DeleteTodoListComponent, } from './components/delete-todo-list/delete-todo-list.component';
import { SearchTodoListsComponent, } from './components/search-todo-lists/search-todo-lists.component';
import { GetTodoListComponent, } from './components/get-todo-list/get-todo-list.component';


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
