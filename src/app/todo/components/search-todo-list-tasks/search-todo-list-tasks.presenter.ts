import { TodoListTaskService,     } from '../../services/todo-list-task.service';
import { SearchTodoListTasksView, } from './search-todo-list-tasks.view';

export class SearchTodoListTasksPresenter {
  public constructor(
    public _view: SearchTodoListTasksView,
    public _service: TodoListTaskService,
  ) { }
}
