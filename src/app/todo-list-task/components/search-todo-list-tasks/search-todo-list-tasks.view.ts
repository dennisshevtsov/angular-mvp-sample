import { GetTodoListResponseDto,               } from '../../../todo-list/models';
import { SearchTodoListTasksRecordResponseDto, } from '../../models';

export interface SearchTodoListTasksView {
  todoList: GetTodoListResponseDto;

  todoListTasks: SearchTodoListTasksRecordResponseDto[];

  selectedTodoListTask: SearchTodoListTasksRecordResponseDto;
}
