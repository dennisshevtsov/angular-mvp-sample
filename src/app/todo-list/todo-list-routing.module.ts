import { Injector, NgModule,   } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { AddTodoListComponent,
         SearchTodoListsComponent,
         UpdateTodoListComponent,       } from './components';
import { TodoListLinks, TodoListRoutes, } from './routing';
import { TODO_LIST_TASK_ROUTES,         } from './task/todo-list-task-routing.module';

const options = {
  providers: [
    {
      provide: TodoListRoutes,
      deps: [ TodoListLinks ],
    },
    {
      provide: TodoListLinks,
      deps: [],
    },
  ],
}
const factory = Injector.create(options);

const routeProvider = factory.get(TodoListRoutes);

const routes: Routes = [
  {
    path: routeProvider.addTodoListRoute(),
    component: AddTodoListComponent,
  },
  {
    path: routeProvider.updateTodoListRoute(),
    component: UpdateTodoListComponent,
  },
  {
    path: routeProvider.updateTodoListRoute(),
    children: TODO_LIST_TASK_ROUTES,
  },
  {
    path: routeProvider.searchTodoListsRoute(),
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
