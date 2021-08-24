import { GetTodoListRequestDto,     } from '../../../todo-list/models';
import { TodoListService,           } from '../../../todo-list/services';
import { GetTodoListTaskRequestDto, } from '../../models';
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
      this.view.todoList.title = getTodoListResponseDto.title;
      this.view.todoList.description = getTodoListResponseDto.description;
    }

    const getTodoListTaskRequestDto = new GetTodoListTaskRequestDto(
      this.view.todoListTask.todoListId,
      this.view.todoListTask.todoListTaskId,
    );
    const getTodoListTaskResponseDto = this.todoListTaskService.getTodoListTask(getTodoListTaskRequestDto);

    if (getTodoListTaskResponseDto) {
      this.view.todoListTask.title = getTodoListTaskResponseDto.title;
      this.view.todoListTask.description = getTodoListTaskResponseDto.description;
      this.view.todoListTask.startDate = getTodoListTaskResponseDto.startDate;
      this.view.todoListTask.deadline = getTodoListTaskResponseDto.deadline;
    }
  }

  public update(): void {
    this.todoListTaskService.updateTodoListTask(this.view.todoListTask);
  }
}
