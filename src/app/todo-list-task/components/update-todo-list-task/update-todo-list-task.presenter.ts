import { TodoListService,        } from '../../../todo-list/services';
import { TodoListTaskService,    } from '../../services';
import { UpdateTodoListTaskView, } from './update-todo-list-task.view';

export class UpdateTodoListTaskPresenter {
  public constructor(
    private readonly view: UpdateTodoListTaskView,

    private readonly todoListService: TodoListService,
    private readonly todoListTaskService: TodoListTaskService,
  ) { }

  public load(): void {
    const getTodoListResponseDto = this.todoListService.getTodoList(this.view.todoList);

    this.view.todoList.title = getTodoListResponseDto.title;
    this.view.todoList.description = getTodoListResponseDto.description;
  }

  public update(): void {
    this.todoListTaskService.updateTodoListTask(this.view.todoListTask);
  }
}
