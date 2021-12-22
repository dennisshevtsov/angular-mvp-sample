import { Injector, NgModule,   } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { AddTodoListTaskComponent,
         SearchTodoListTasksComponent,
         UpdateTodoListTaskComponent,  } from './components';
import { TodoListTaskLinks,
         TodoListTaskRoutes,           } from './routing';

const options = {
  providers: [
    {
      provide: TodoListTaskRoutes,
      deps: [ TodoListTaskLinks ],
    },
    {
      provide: TodoListTaskLinks,
      deps: [],
    },
  ],
}
const factory = Injector.create(options);

const routeProvider = factory.get(TodoListTaskRoutes);

export const TODO_LIST_TASK_ROUTES: Routes = [
  {
    path: routeProvider.searchTodoListsRoute(),
    component: SearchTodoListTasksComponent,
  },
  {
    path: routeProvider.addTodoListRoute(),
    component: AddTodoListTaskComponent,
  },
  {
    path: routeProvider.updateTodoListRoute(),
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
