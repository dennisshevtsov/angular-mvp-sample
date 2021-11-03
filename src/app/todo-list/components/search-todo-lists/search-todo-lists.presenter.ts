import { TodoListService,           } from '../../api';
import { SearchTodoListsView,       } from './search-todo-lists.view';

export class SearchTodoListsPresenter {
  public constructor(
    private readonly view: SearchTodoListsView,
    private readonly service: TodoListService,
  ) { }

  public search(): void {
    this.view.datasource = this.service.searchTodoList(this.view.query);
  }

  public delete(): void {
    this.service.deleteTodoList(this.view.selected);
  }
}
