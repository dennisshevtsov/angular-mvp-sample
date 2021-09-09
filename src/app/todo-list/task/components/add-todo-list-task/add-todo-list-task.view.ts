import { GetTodoListResponseDto,    } from '../../../api';
import { AddTodoListTaskRequestDto, } from '../../api';

export interface AddTodoListTaskView {
  todoList: GetTodoListResponseDto;

  todoListTask: AddTodoListTaskRequestDto;

  todoListTaskId: number;
}
