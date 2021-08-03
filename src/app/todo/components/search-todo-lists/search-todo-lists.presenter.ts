import { SearchTodoListRequestDto, } from '../../models';
import { TodoListService, } from '../../services/todo-list.service';
import { SearchTodoListsView, } from './search-todo-lists.view';

export class SearchTodoListsPresenter {
  public constructor(
    private readonly _view: SearchTodoListsView,
    private readonly _service: TodoListService,
  ) { }

  public search(): void {
    const searchTodoListRequestDto = new SearchTodoListRequestDto(
      this._view.query.term,
    );

    this._view.datasource = this._service.searchTodoList(searchTodoListRequestDto);
  }
}
