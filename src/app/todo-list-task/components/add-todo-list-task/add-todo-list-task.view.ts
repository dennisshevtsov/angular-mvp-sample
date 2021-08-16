import { AddTodoListTaskRequestDto, } from '../../models';

export interface AddTodoListTaskView {
  todoListTaskId: string;

  datasource: AddTodoListTaskRequestDto;
}
