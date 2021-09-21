import { NgModule,             } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { AddTodoListTaskComponent,
         SearchTodoListTasksComponent,
         UpdateTodoListTaskComponent,  } from './components';
import { TODO_LIST_TASK_ROUTE,
         TODO_LIST_TASK_PARAMETER,
         TODO_LIST_NEW_TASK_ROUTE,     } from './routing';

export const TODO_LIST_TASK_ROUTES: Routes = [
  {
    path: TODO_LIST_TASK_ROUTE,
    component: SearchTodoListTasksComponent,
  },
  {
    path: `${TODO_LIST_TASK_ROUTE}/${TODO_LIST_NEW_TASK_ROUTE}`,
    component: AddTodoListTaskComponent,
  },
  {
    path: `${TODO_LIST_TASK_ROUTE}/:${TODO_LIST_TASK_PARAMETER}`,
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
