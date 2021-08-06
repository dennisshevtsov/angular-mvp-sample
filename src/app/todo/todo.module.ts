import { NgModule,             } from '@angular/core';
import { CommonModule,         } from '@angular/common';
import { ReactiveFormsModule,  } from '@angular/forms';

import { TodoRoutingModule,        } from './todo-routing.module';
import { AddTodoListComponent,
         UpdateTodoListComponent,
         SearchTodoListsComponent, } from './components';
import { BrowseTodoListComponent } from './components/search-todo-items/search-todo-items.component';

@NgModule({
  declarations: [
    AddTodoListComponent,
    UpdateTodoListComponent,
    SearchTodoListsComponent,
    BrowseTodoListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoRoutingModule,
  ],
})
export class TodoModule {
}
