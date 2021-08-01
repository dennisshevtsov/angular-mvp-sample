import { TodoListService, } from '../../services/todo-list.service';
import { AddTodoListView, } from './add-todo-list.view';

export class AddTodoListPresenter {
  public constructor(
    private readonly _view: AddTodoListView,
    private readonly _service: TodoListService,
  ) {}

  public save(): void {
    this._service.addTodoList(this._view.datasource);
  }
}
