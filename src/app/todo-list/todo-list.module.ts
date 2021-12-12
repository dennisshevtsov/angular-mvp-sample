import { NgModule,             } from '@angular/core';
import { CommonModule,         } from '@angular/common';
import { ReactiveFormsModule,  } from '@angular/forms';

import { TodoListApiModule,        } from './api';
import { AddTodoListComponent,
         UpdateTodoListComponent,
         SearchTodoListsComponent, } from './components';
import { TodoRoutingModule,        } from './todo-list-routing.module';
import { CoreModule,               } from '../core';

@NgModule({
  declarations: [
    AddTodoListComponent,
    UpdateTodoListComponent,
    SearchTodoListsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    TodoListApiModule,
    TodoRoutingModule,
  ],
})
export class TodoModule { }
