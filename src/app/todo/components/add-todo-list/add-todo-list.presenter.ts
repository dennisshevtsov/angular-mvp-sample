import { TodoListServiceService, } from '../../services/todo-list-service.service';
import { AddTodoListView, } from './add-todo-list.view';

export class AddTodoListPresenter {
  public constructor(
    private readonly _view: AddTodoListView,
    private readonly _service: TodoListServiceService,
  ) {}

  public save(): void {
    this._service.addTodoList(this._view.datasource);
  }
}
