import { NgModule,            } from '@angular/core';
import { CommonModule,        } from '@angular/common';
import { ReactiveFormsModule, } from '@angular/forms';

import { TodoListTaskRoutingModule,    } from './todo-list-task-routing.module';
import { SearchTodoListTasksComponent,
         UpdateTodoListTaskComponent,  } from './components';
import { AddTodoListTaskComponent,     } from './components';

@NgModule({
  declarations: [
    SearchTodoListTasksComponent,
    UpdateTodoListTaskComponent,
    AddTodoListTaskComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoListTaskRoutingModule,
  ],
})
export class TodoListTaskModule {
}
