import { GetTodoListResponseDto,               } from '../../../todo-list-api';
import { SearchTodoListTasksRecordResponseDto, } from '../../../todo-list-task-api';

export interface SearchTodoListTasksView {
  todoList: GetTodoListResponseDto;

  todoListTasks: SearchTodoListTasksRecordResponseDto[];

  selectedTodoListTask: SearchTodoListTasksRecordResponseDto;
}
