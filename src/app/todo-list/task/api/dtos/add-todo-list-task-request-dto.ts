import { TodoListTaskTimeDto, } from './todo-list-task-time-dto';

export class AddTodoListTaskRequestDto {
  public constructor(
    public todoListId    : number  = 0,
    public title         : string  = '',
    public description   : string  = '',
    public date          : string  = '',
    public time          : TodoListTaskTimeDto,
  ) { }
}
