import { SearchTodoListsRecordResponseDto,
         SearchTodoListsRequestDto,        } from '../../api';

export interface SearchTodoListsView {
  selected: SearchTodoListsRecordResponseDto;

  query: SearchTodoListsRequestDto;

  datasource: SearchTodoListsRecordResponseDto[];
}
