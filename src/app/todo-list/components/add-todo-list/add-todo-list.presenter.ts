import { TodoListService, } from '../../api';
import { AddTodoListView, } from './add-todo-list.view';

export class AddTodoListPresenter {
  public constructor(
    private readonly view: AddTodoListView,
    private readonly service: TodoListService,
  ) {}

  public add(): void {
    this.service.addTodoList(this.view.todoList);
  }
}
