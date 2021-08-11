import { NgModule,             } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { SearchTodoListTasksComponent,
         UpdateTodoListTaskComponent,  } from './components';

const routes: Routes = [
  {
    path: 'todo-list/:todoListId/task',
    component: SearchTodoListTasksComponent,
  },
  {
    path: 'todo-list/:todoListId/task/:todoListTaskId',
    component: UpdateTodoListTaskComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TodoListTaskRoutingModule { }
