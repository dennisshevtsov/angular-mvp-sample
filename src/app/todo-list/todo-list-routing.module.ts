import { NgModule,             } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { AddTodoListComponent,
         SearchTodoListsComponent,
         UpdateTodoListComponent,  } from './components';
import { TODO_LIST_NEW_ROUTE,
         TODO_LIST_PARAMETER,
         TODO_LIST_ROUTE,          } from './routing';
import { TODO_LIST_TASK_ROUTES,    } from './task/todo-list-task-routing.module';

const routes: Routes = [
  {
    path: `${TODO_LIST_ROUTE}/${TODO_LIST_NEW_ROUTE}`,
    component: AddTodoListComponent,
  },
  {
    path: `${TODO_LIST_ROUTE}/:${TODO_LIST_PARAMETER}`,
    component: UpdateTodoListComponent,
  },
  {
    path: `${TODO_LIST_ROUTE}/:${TODO_LIST_PARAMETER}`,
    children: TODO_LIST_TASK_ROUTES,
  },
  {
    path: TODO_LIST_ROUTE,
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
