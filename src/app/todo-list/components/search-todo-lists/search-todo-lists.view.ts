import { SearchTodoListsRecordResponseDto,
         SearchTodoListsRequestDto,        } from '../../api';

export interface SearchTodoListsView {
  query: SearchTodoListsRequestDto;

  datasource: SearchTodoListsRecordResponseDto[];
}
