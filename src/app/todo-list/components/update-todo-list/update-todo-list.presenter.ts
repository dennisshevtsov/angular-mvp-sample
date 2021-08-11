import { GetTodoListRequestDto, } from '../../models';
import { TodoListService,       } from '../../services';
import { UpdateTodoListView,    } from './update-todo-list.view';

export class UpdateTodoListPresenter {
  public constructor(
    private readonly view: UpdateTodoListView,
    private readonly service: TodoListService,
  ) {}

  public load(): void {
    if (this.view.datasource.todoListId) {
      const getTodoListRequestDto = new GetTodoListRequestDto(
        this.view.datasource.todoListId,
      );
      const getTodoListResponseDto = this.service.getTodoList(getTodoListRequestDto);

      this.view.datasource.title = getTodoListResponseDto.title;
      this.view.datasource.description = getTodoListResponseDto.description;
    }
  }

  public update(): void {
    this.service.updateTodoList(this.view.datasource);
  }
}
