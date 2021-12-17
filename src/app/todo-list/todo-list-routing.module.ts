import { NgModule,             } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { AddTodoListComponent,
         SearchTodoListsComponent,
         UpdateTodoListComponent,  } from './components';
import { TodoListRoutes,           } from './routing';
import { TODO_LIST_TASK_ROUTES,    } from './task/todo-list-task-routing.module';

const routes: Routes = [
  {
    path: TodoListRoutes.addTodoListLink(),
    component: AddTodoListComponent,
  },
  {
    path: TodoListRoutes.updateTodoListLink(),
    component: UpdateTodoListComponent,
  },
  {
    path: TodoListRoutes.updateTodoListLink(),
    children: TODO_LIST_TASK_ROUTES,
  },
  {
    path: TodoListRoutes.searchTodoLists(),
    component: SearchTodoListsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TodoRoutingModule { }
