import { TodoListService,                  } from '../../../api';
import { CompleteTodoListTaskRequestDto,
         UncompleteTodoListTaskRequestDto,
         TodoListTaskService,              } from '../../api';
import { SearchTodoListTasksView,          } from './search-todo-list-tasks.view';

export class SearchTodoListTasksPresenter {
  public constructor(
    private readonly view: SearchTodoListTasksView,
    private readonly todoListService: TodoListService,
    private readonly todoListTaskService: TodoListTaskService,
  ) { }

  public search(): void {
    this.view.datasource = this.todoListTaskService.searchTodoListTasks(this.view.query);
  }

  public complete(): void {
    const requestDto = new CompleteTodoListTaskRequestDto(
      this.view.query.todoListId,
      this.view.selected.todoListTaskId);

    this.todoListTaskService.completeTodoListTask(requestDto);
  }

  public uncomplete(): void {
    const requestDto = new UncompleteTodoListTaskRequestDto(
      this.view.query.todoListId,
      this.view.selected.todoListTaskId);

    this.todoListTaskService.uncompleteTodoListTask(requestDto);
  }
}
