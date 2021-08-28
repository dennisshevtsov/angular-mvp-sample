import { GetTodoListRequestDto, UpdateTodoListRequestDto,     } from '../../../todo-list/models';
import { TodoListService,           } from '../../../todo-list/services';
import { GetTodoListTaskRequestDto, UpdateTodoListTaskRequestDto, } from '../../models';
import { TodoListTaskService,       } from '../../services';
import { UpdateTodoListTaskView,    } from './update-todo-list-task.view';

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
        getTodoListTaskResponseDto.description,
        getTodoListTaskResponseDto.startDate,
        getTodoListTaskResponseDto.deadline,
      );
    }
  }

  public update(): void {
    this.todoListTaskService.updateTodoListTask(this.view.todoListTask);
  }
}
