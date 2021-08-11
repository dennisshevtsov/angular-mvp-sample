import { CompleteTodoListTaskRequestDto,
         SearchTodoListTasksRequestDto   } from '../models';
import { TodoListTaskService,            } from '../services';
import { SearchTodoListTasksView,        } from './search-todo-list-tasks.view';

export class SearchTodoListTasksPresenter {
  public constructor(
    private readonly view: SearchTodoListTasksView,
    private readonly service: TodoListTaskService,
  ) { }

  public search(): void {
    const requestDto = new SearchTodoListTasksRequestDto(this.view.todoListId);

    this.view.datasource = this.service.searchTodoListTasks(requestDto);
  }

  public complete(todoListTaskId: string): void {
    const requestDto = new CompleteTodoListTaskRequestDto(todoListTaskId);

    this.service.completeTodoListTask(requestDto);
  }
}
