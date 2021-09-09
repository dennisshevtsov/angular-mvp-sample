import { NgModule,             } from '@angular/core';
import { CommonModule,         } from '@angular/common';
import { ReactiveFormsModule,  } from '@angular/forms';

import { TodoRoutingModule,        } from './todo-list-routing.module';
import { AddTodoListComponent,
         UpdateTodoListComponent,
         SearchTodoListsComponent, } from './components';
import { TodoListApiModule,        } from './api';

@NgModule({
  declarations: [
    AddTodoListComponent,
    UpdateTodoListComponent,
    SearchTodoListsComponent,
  ],
  imports: [
    TodoListApiModule,
    CommonModule,
    ReactiveFormsModule,
    TodoRoutingModule,
  ],
})
export class TodoModule {
}
