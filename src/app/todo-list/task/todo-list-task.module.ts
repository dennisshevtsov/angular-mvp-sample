import { NgModule,            } from '@angular/core';
import { CommonModule,        } from '@angular/common';
import { ReactiveFormsModule, } from '@angular/forms';

import { TodoListTaskApiModule,        } from './api';
import { AddTodoListTaskComponent,
         SearchTodoListTasksComponent,
         UpdateTodoListTaskComponent,  } from './components';
import { TodoListTaskTimePipe,         } from './pipes';

@NgModule({
  declarations: [
    SearchTodoListTasksComponent,
    UpdateTodoListTaskComponent,
    AddTodoListTaskComponent,
    TodoListTaskTimePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoListTaskApiModule,
  ],
})
export class TodoListTaskModule { }
