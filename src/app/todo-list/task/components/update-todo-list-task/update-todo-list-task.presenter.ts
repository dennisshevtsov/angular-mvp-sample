import { GetTodoListRequestDto,
         TodoListService,              } from '../../../api';
import { GetTodoListTaskRequestDto,
         UpdateTodoListTaskRequestDto,
         TodoListTaskService,          } from '../../api';
import { UpdateTodoListTaskView,       } from './update-todo-list-task.view';

export class UpdateTodoListTaskPresenter {
  public constructor(
    private readonly view: UpdateTodoListTaskView,

    private readonly todoListService: TodoListService,
    private readonly todoListTaskService: TodoListTaskService,
  ) { }

  public load(): void {
    const getTodoListRequestDto = new GetTodoListRequestDto(this.view.todoList.todoListId);
    const getTodoListResponseDto = this.todoListService.getTodoList(getTodoListRequestDto);

    if (getTodoListResponseDto) {
      this.view.todoList = getTodoListResponseDto;
    }

    const getTodoListTaskRequestDto = new GetTodoListTaskRequestDto(
      this.view.todoListTask.todoListId,
      this.view.todoListTask.todoListTaskId,
    );
    const getTodoListTaskResponseDto = this.todoListTaskService.getTodoListTask(getTodoListTaskRequestDto);

    if (getTodoListTaskResponseDto) {
      this.view.todoListTask = new UpdateTodoListTaskRequestDto(
        0,
        0,
        getTodoListTaskResponseDto.title,
        getTodoListTaskResponseDto.date,
        getTodoListTaskResponseDto.fullDay,
        getTodoListTaskResponseDto.startTime,
        getTodoListTaskResponseDto.endTime,
        getTodoListTaskResponseDto.description,
      );
    }
  }

  public update(): void {
    this.todoListTaskService.updateTodoListTask(this.view.todoListTask);
  }
}
