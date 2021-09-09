import { GetTodoListResponseDto,               } from '../../../api';
import { SearchTodoListTasksRecordResponseDto, } from '../../api';

export interface SearchTodoListTasksView {
  todoList: GetTodoListResponseDto;

  todoListTasks: SearchTodoListTasksRecordResponseDto[];

  selectedTodoListTask: SearchTodoListTasksRecordResponseDto;
}
