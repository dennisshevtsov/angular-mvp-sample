import { TodoListTaskTimeDto, } from './todo-list-task-time-dto';

export class SearchTodoListTasksRecordResponseDto {
  public constructor(
    public todoListTaskId: number  = 0,
    public completed     : boolean = false,
    public title         : string  = '',
    public description   : string  = '',
    public date          : string  = '',
    public time          : TodoListTaskTimeDto,
  ) { }
}
