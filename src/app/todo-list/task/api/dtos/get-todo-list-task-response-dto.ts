import { TodoListTaskTimeDto, } from './todo-list-task-time-dto';

export class GetTodoListTaskResponseDto {
  public constructor(
    public title       : string = '',
    public description : string = '',
    public date        : string = '',
    public time        : TodoListTaskTimeDto,
  ) { }
}
