import { SearchTodoListsRequestDto,
         TodoListService,           } from '../../api';
import { SearchTodoListsView,       } from './search-todo-lists.view';

export class SearchTodoListsPresenter {
  public constructor(
    private readonly view: SearchTodoListsView,
    private readonly service: TodoListService,
  ) { }

  public search(): void {
    const searchTodoListRequestDto = new SearchTodoListsRequestDto(
      this.view.query.term,
    );

    this.view.todoLists = this.service.searchTodoList(searchTodoListRequestDto);
  }
}
