import { GetTodoListResponseDto,       } from '../../../todo-list-api';
import { UpdateTodoListTaskRequestDto, } from '../../../todo-list-task-api';

export interface UpdateTodoListTaskView {
  todoList: GetTodoListResponseDto;

  todoListTask: UpdateTodoListTaskRequestDto;
}
