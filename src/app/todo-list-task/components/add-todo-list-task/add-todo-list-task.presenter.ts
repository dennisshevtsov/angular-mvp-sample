import { GetTodoListRequestDto,
         TodoListService,            } from '../../../todo-list-api';
import { TodoListTaskService,
         AddTodoListTaskResponseDto, } from '../../../todo-list-task-api';
import { AddTodoListTaskView,        } from './add-todo-list-task.view';

export class AddTodoListTaskPresenter {
  public constructor(
    public readonly view: AddTodoListTaskView,
    public readonly todoListService: TodoListService,
    public readonly todoListTaskService: TodoListTaskService,
  ) { }

  public add(): void {
    const responseDto: AddTodoListTaskResponseDto =
      this.todoListTaskService.addTodoListTask(this.view.todoListTask);

    this.view.todoListTaskId = responseDto.todoListTaskId;
  }

  public load(): void {
    const getTodoListRequestDto = new GetTodoListRequestDto(
      this.view.todoList.todoListId);
    const getTodoListResponseDto =
      this.todoListService.getTodoList(getTodoListRequestDto);

    if (getTodoListResponseDto) {
      this.view.todoList = getTodoListResponseDto;
    }
  }
}
