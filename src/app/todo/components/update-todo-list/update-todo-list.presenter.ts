import { GetTodoListRequestDto, } from '../../models';
import { TodoListService, } from '../../services/todo-list.service';
import { UpdateTodoListView, } from './update-todo-list.view';

export class UpdateTodoListPresenter {
  public constructor(
    private readonly _view: UpdateTodoListView,
    private readonly _service: TodoListService,
  ) {}

  public load(): void {
    const getTodoListRequestDto = new GetTodoListRequestDto(
      this._view.datasource.todoListId,
    );
    const getTodoListResponseDto = this._service.getTodoList(getTodoListRequestDto);

    this._view.datasource.title = getTodoListResponseDto.title;
    this._view.datasource.description = getTodoListResponseDto.description;
  }

  public update(): void {
    this._service.updateTodoList(this._view.datasource);
  }
}
