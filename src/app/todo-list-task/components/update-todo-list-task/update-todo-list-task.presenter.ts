import { TodoListTaskService,    } from '../../services';
import { UpdateTodoListTaskView, } from './update-todo-list-task.view';

export class UpdateTodoListTaskPresenter {
  public constructor(
    private readonly view: UpdateTodoListTaskView,
    private readonly service: TodoListTaskService,
  ) { }

  public update(): void {
    this.service.updateTodoListTask(this.view.todoListTask);
  }
}
