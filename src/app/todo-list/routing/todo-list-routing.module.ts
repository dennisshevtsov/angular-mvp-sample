import { NgModule,             } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { AddTodoListComponent,
         SearchTodoListsComponent,
         UpdateTodoListComponent,  } from '../components';

export const TODO_LIST_PARAMETER_NAME = 'todoListId';
export const TODO_LIST_ROUTE_BASE = 'todo-list';

const routes: Routes = [
  {
    path: `${TODO_LIST_ROUTE_BASE}/new`,
    component: AddTodoListComponent,
  },
  {
    path: `${TODO_LIST_ROUTE_BASE}/:${TODO_LIST_PARAMETER_NAME}`,
    component: UpdateTodoListComponent,
  },
  {
    path: TODO_LIST_ROUTE_BASE,
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
export class TodoRoutingModule {
}
