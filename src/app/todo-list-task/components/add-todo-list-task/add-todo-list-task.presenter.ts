import { TodoListTaskService,        } from '../../services';
import { AddTodoListTaskResponseDto, } from '../../models';
import { AddTodoListTaskView,        } from './add-todo-list-task.view';

export class AddTodoListTaskPresenter {
  public constructor(
    public readonly view: AddTodoListTaskView,
    public readonly service: TodoListTaskService,
  ) { }

  public add(): void {
    const responseDto: AddTodoListTaskResponseDto =
      this.service.addTodoListTask(this.view.datasource);

    this.view.todoListTaskId = responseDto.todoListTaskId;
  }
}
