import { GetTodoListRequestDto } from 'src/app/todo-list/models';
import { TodoListService,                } from '../../../todo-list/services';
import { CompleteTodoListTaskRequestDto,
         SearchTodoListTasksRequestDto   } from '../../models';
import { TodoListTaskService,            } from '../../services';
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
