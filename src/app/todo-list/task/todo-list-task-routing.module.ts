import { NgModule,             } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { AddTodoListTaskComponent,
         SearchTodoListTasksComponent,
         UpdateTodoListTaskComponent,   } from './components';
import { TODO_LIST_TASK_ROUTE_BASE,
         TODO_LIST_TASK_PARAMETER_NAME, } from './routing/routes';

export const TODO_LIST_TASK_ROUTES: Routes = [
  {
    path: TODO_LIST_TASK_ROUTE_BASE,
    component: SearchTodoListTasksComponent,
  },
  {
    path: `${TODO_LIST_TASK_ROUTE_BASE}/new`,
    component: AddTodoListTaskComponent,
  },
  {
    path: `${TODO_LIST_TASK_ROUTE_BASE}/:${TODO_LIST_TASK_PARAMETER_NAME}`,
    component: UpdateTodoListTaskComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(TODO_LIST_TASK_ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class TodoListTaskRoutingModule {
}
