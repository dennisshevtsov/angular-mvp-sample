import { NgModule,             } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { AddTodoListComponent,
         BrowseTodoListComponent,
         SearchTodoListsComponent,
         UpdateTodoListComponent,  } from './components';

const routes: Routes = [
  {
    path: 'todo-list/new',
    component: AddTodoListComponent,
  },
  {
    path: 'todo-list/:todoListId',
    component: UpdateTodoListComponent,
  },
  {
    path: 'todo-list/:todoListId/task',
    component: BrowseTodoListComponent,
  },
  {
    path: 'todo-list',
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
