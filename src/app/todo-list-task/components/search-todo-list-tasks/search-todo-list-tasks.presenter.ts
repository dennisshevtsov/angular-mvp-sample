import { GetTodoListRequestDto,
         TodoListService,                } from '../../../todo-list-api';
import { CompleteTodoListTaskRequestDto,
         SearchTodoListTasksRequestDto,
         TodoListTaskService,            } from '../../../todo-list-task-api';
import { SearchTodoListTasksView,        } from './search-todo-list-tasks.view';

export class SearchTodoListTasksPresenter {
  public constructor(
    private readonly view: SearchTodoListTasksView,
    private readonly todoListService: TodoListService,
    private readonly todoListTaskService: TodoListTaskService,
  ) { }

  public search(): void {
    const getTodoListRequestDto = new GetTodoListRequestDto(
      this.view.todoList.todoListId);
    const getTodoListResponseDto = this.todoListService.getTodoList(
      getTodoListRequestDto);

    if (getTodoListResponseDto) {
      this.view.todoList.title = getTodoListResponseDto.title;
      this.view.todoList.description = getTodoListResponseDto.description;
    }

    const searchTodoListTasksRequestDto = new SearchTodoListTasksRequestDto(
      this.view.todoList.todoListId);

    this.view.todoListTasks = this.todoListTaskService.searchTodoListTasks(searchTodoListTasksRequestDto);
  }

  public complete(): void {
    const requestDto = new CompleteTodoListTaskRequestDto(
      this.view.todoList.todoListId,
      this.view.selectedTodoListTask.todoListTaskId);

    this.todoListTaskService.completeTodoListTask(requestDto);
  }
}
