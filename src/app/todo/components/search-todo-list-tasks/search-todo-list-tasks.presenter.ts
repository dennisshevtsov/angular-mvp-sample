import { SearchTodoListTasksRequestDto } from '../../models';
import { TodoListTaskService,     } from '../../services/todo-list-task.service';
import { SearchTodoListTasksView, } from './search-todo-list-tasks.view';

export class SearchTodoListTasksPresenter {
  public constructor(
    private readonly _view: SearchTodoListTasksView,
    private readonly _service: TodoListTaskService,
  ) { }

  public search(): void {
    const requestDto = new SearchTodoListTasksRequestDto(this._view.todoListId);

    this._view.datasource = this._service.searchTodoListTasks(requestDto);
  }
}
