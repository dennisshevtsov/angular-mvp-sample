import { NgModule,            } from '@angular/core';
import { CommonModule,        } from '@angular/common';
import { ReactiveFormsModule, } from '@angular/forms';

import { TodoListTaskRoutingModule,    } from './todo-list-task-routing.module';
import { SearchTodoListTasksComponent,
         UpdateTodoListTaskComponent,  } from './components';
import { AddTodoListTaskComponent,     } from './components';
import { TodoListTaskApiModule,        } from './api';

@NgModule({
  declarations: [
    SearchTodoListTasksComponent,
    UpdateTodoListTaskComponent,
    AddTodoListTaskComponent,
  ],
  imports: [
    TodoListTaskApiModule,
    CommonModule,
    ReactiveFormsModule,
    TodoListTaskRoutingModule,
  ],
})
export class TodoListTaskModule {
}
