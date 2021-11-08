import { TodoListService,     } from '../../../api';
import { TodoListTaskService, } from '../../api';
import { AddTodoListTaskView, } from './add-todo-list-task.view';

export class AddTodoListTaskPresenter {
  public constructor(
    public readonly view: AddTodoListTaskView,
    public readonly todoListService: TodoListService,
    public readonly todoListTaskService: TodoListTaskService,
  ) { }

  public add(): void {
    this.todoListTaskService.addTodoListTask(this.view.datasource);
  }
}
