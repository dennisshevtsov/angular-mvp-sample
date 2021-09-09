import { GetTodoListResponseDto,       } from '../../../api';
import { UpdateTodoListTaskRequestDto, } from '../../api';

export interface UpdateTodoListTaskView {
  todoList: GetTodoListResponseDto;

  todoListTask: UpdateTodoListTaskRequestDto;
}
