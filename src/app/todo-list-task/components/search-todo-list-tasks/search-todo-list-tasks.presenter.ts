import { CompleteTodoListTaskRequestDto,
         SearchTodoListTasksRequestDto   } from '../../models';
import { TodoListTaskService,            } from '../../services';
import { SearchTodoListTasksView,        } from './search-todo-list-tasks.view';

export class SearchTodoListTasksPresenter {
  public constructor(
    private readonly view: SearchTodoListTasksView,
    private readonly service: TodoListTaskService,
  ) { }

  public search(): void {
    const requestDto = new SearchTodoListTasksRequestDto(
      this.view.todoList.todoListId);

    this.view.todoListTasks = this.service.searchTodoListTasks(requestDto);
  }

  public complete(): void {
    const requestDto = new CompleteTodoListTaskRequestDto(
      this.view.todoList.todoListId,
      this.view.selectedTodoListTask.todoListTaskId);

    this.service.completeTodoListTask(requestDto);
  }
}
