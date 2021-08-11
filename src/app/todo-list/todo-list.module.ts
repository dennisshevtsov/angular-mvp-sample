import { NgModule,             } from '@angular/core';
import { CommonModule,         } from '@angular/common';
import { ReactiveFormsModule,  } from '@angular/forms';

import { TodoRoutingModule,        } from './todo-list-routing.module';
import { AddTodoListComponent,
         UpdateTodoListComponent,
         SearchTodoListsComponent, } from './components';
import { SearchTodoListTasksComponent } from '../todo-list-task/components/search-todo-list-tasks/search-todo-list-tasks.component';

@NgModule({
  declarations: [
    AddTodoListComponent,
    UpdateTodoListComponent,
    SearchTodoListsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoRoutingModule,
  ],
})
export class TodoModule {
}
