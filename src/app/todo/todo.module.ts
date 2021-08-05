import { NgModule,             } from '@angular/core';
import { CommonModule,         } from '@angular/common';
import { ReactiveFormsModule,  } from '@angular/forms';

import { TodoRoutingModule,        } from './todo-routing.module';
import { AddTodoListComponent,
         UpdateTodoListComponent,
         SearchTodoListsComponent, } from './components';

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
