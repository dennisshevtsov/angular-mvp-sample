import { GetTodoListResponseDto,    } from '../../../todo-list-api';
import { AddTodoListTaskRequestDto, } from '../../../todo-list-task-api';

export interface AddTodoListTaskView {
  todoList: GetTodoListResponseDto;

  todoListTask: AddTodoListTaskRequestDto;

  todoListTaskId: number;
}
