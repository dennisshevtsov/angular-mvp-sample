import { SearchTodoListTasksRecordResponseDto, } from '../models';

export interface SearchTodoListTasksView {
  todoListId: string;

  datasource: SearchTodoListTasksRecordResponseDto[];
}
