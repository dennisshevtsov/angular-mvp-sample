import { GetTodoListRequestDto,
         TodoListService,       } from '../../api';
import { UpdateTodoListView,    } from './update-todo-list.view';

export class UpdateTodoListPresenter {
  public constructor(
    private readonly view: UpdateTodoListView,
    private readonly service: TodoListService,
  ) {}

  public load(): void {
    if (this.view.todoList.todoListId) {
      const getTodoListRequestDto = new GetTodoListRequestDto(
        this.view.todoList.todoListId,
      );
      const getTodoListResponseDto = this.service.getTodoList(getTodoListRequestDto);

      if (getTodoListResponseDto) {
        this.view.todoList = getTodoListResponseDto;
      }
    }
  }

  public update(): void {
    this.service.updateTodoList(this.view.todoList);
  }
}
