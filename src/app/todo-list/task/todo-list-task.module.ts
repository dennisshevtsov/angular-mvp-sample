import { NgModule,            } from '@angular/core';
import { CommonModule,        } from '@angular/common';
import { ReactiveFormsModule, } from '@angular/forms';

import { TodoListTaskApiModule,        } from './api';
import { AddTodoListTaskComponent,
         SearchTodoListTasksComponent,
         UpdateTodoListTaskComponent,  } from './components';
import { TodoListTaskTimePipe,         } from './pipes';
import { TodoListTaskRoutingModule,    } from './todo-list-task-routing.module';
import { CoreModule,                   } from '../../core';

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
    CoreModule,
    TodoListTaskApiModule,
    TodoListTaskRoutingModule,
  ],
})
export class TodoListTaskModule { }
