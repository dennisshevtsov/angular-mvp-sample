import { GetTodoListTaskRequestDto,
         UpdateTodoListTaskRequestDto,
         TodoListTaskService,          } from '../../api';
import { UpdateTodoListTaskView,       } from './update-todo-list-task.view';

export class UpdateTodoListTaskPresenter {
  public constructor(
    private readonly view: UpdateTodoListTaskView,

    private readonly todoListTaskService: TodoListTaskService,
  ) { }

  public load(): void {
    const datasource = this.view.datasource;
    const getTodoListTaskRequestDto = new GetTodoListTaskRequestDto(
      datasource.todoListId, datasource.todoListTaskId);
    const getTodoListTaskResponseDto = this.todoListTaskService.getTodoListTask(getTodoListTaskRequestDto);

    if (getTodoListTaskResponseDto) {
      this.view.datasource = new UpdateTodoListTaskRequestDto(
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
    this.todoListTaskService.updateTodoListTask(this.view.datasource);
  }
}
