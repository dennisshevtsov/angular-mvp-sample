import { GetTodoListResponseDto,    } from '../../../todo-list/models';
import { AddTodoListTaskRequestDto, } from '../../models';

export interface AddTodoListTaskView {
  todoList: GetTodoListResponseDto;

  todoListTask: AddTodoListTaskRequestDto;

  todoListTaskId: number;
}
