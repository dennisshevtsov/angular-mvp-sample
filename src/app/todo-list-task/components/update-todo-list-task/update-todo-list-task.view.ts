import { GetTodoListResponseDto,       } from '../../../todo-list/models';
import { UpdateTodoListTaskRequestDto, } from '../../models';

export interface UpdateTodoListTaskView {
  todoList: GetTodoListResponseDto;

  todoListTask: UpdateTodoListTaskRequestDto;
}
