import { SearchTodoListRecordResponseDto, SearchTodoListRequestDto, } from '../../models';

export interface SearchTodoListsView {
  get query(): SearchTodoListRequestDto;

  set query(query: SearchTodoListRequestDto);

  get datasource(): SearchTodoListRecordResponseDto[];

  set datasource(datasource: SearchTodoListRecordResponseDto[]);
}
