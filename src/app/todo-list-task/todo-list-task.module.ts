import { NgModule,     } from '@angular/core';
import { CommonModule, } from '@angular/common';

import { TodoListTaskRoutingModule,    } from './todo-list-task-routing.module';
import { SearchTodoListTasksComponent,
         UpdateTodoListTaskComponent,  } from './components';

@NgModule({
  declarations: [
    SearchTodoListTasksComponent,
    UpdateTodoListTaskComponent,
  ],
  imports: [
    CommonModule,
    TodoListTaskRoutingModule,
  ]
})
export class TodoListTaskModule { }
