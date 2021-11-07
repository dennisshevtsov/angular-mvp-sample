import { SearchTodoListTasksRecordResponseDto,
         SearchTodoListTasksRequestDto,        } from '../../api';

export interface SearchTodoListTasksView {
  query: SearchTodoListTasksRequestDto;

  datasource: SearchTodoListTasksRecordResponseDto[];

  selected: SearchTodoListTasksRecordResponseDto;
}
