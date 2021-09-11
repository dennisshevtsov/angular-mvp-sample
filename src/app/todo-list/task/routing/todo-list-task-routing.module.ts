import { NgModule,             } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { AddTodoListTaskComponent,
         SearchTodoListTasksComponent,
         UpdateTodoListTaskComponent,   } from '../components';
import { TODO_LIST_TASK_ROUTE_BASE,
         TODO_LIST_TASK_PARAMETER_NAME, } from './routes';

const routes: Routes = [
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
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TodoListTaskRoutingModule {
}
