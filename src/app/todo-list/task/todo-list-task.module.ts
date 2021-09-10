import { NgModule,            } from '@angular/core';
import { CommonModule,        } from '@angular/common';
import { ReactiveFormsModule, } from '@angular/forms';

import { TodoListTaskApiModule,        } from './api';
import { AddTodoListTaskComponent,
         SearchTodoListTasksComponent,
         UpdateTodoListTaskComponent,  } from './components';
import { TodoListTaskRoutingModule,    } from './routing';

@NgModule({
  declarations: [
    SearchTodoListTasksComponent,
    UpdateTodoListTaskComponent,
    AddTodoListTaskComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoListTaskApiModule,
    TodoListTaskRoutingModule,
  ],
})
export class TodoListTaskModule { }
