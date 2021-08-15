import { NgModule,     } from '@angular/core';
import { CommonModule, } from '@angular/common';

import { TodoListTaskRoutingModule,    } from './todo-list-task-routing.module';
import { SearchTodoListTasksComponent,
         UpdateTodoListTaskComponent,  } from './components';
import { AddTodoListTaskComponent } from './components/add-todo-list-task/add-todo-list-task.component';

@NgModule({
  declarations: [
    SearchTodoListTasksComponent,
    UpdateTodoListTaskComponent,
    AddTodoListTaskComponent,
  ],
  imports: [
    CommonModule,
    TodoListTaskRoutingModule,
  ]
})
export class TodoListTaskModule { }
