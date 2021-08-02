import { SearchTodoListRecordResponseDto, SearchTodoListRequestDto, } from '../../models';

export interface SearchTodoListsView {
  query: SearchTodoListRequestDto;

  datasource: SearchTodoListRecordResponseDto[];
}
