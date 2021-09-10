import { NgModule,             } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { AddTodoListComponent,
         SearchTodoListsComponent,
         UpdateTodoListComponent,  } from '../components';
import { TODO_LIST_PARAMETER_NAME, 
         TODO_LIST_ROUTE_BASE,     } from './routes';

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
export class TodoRoutingModule { }
