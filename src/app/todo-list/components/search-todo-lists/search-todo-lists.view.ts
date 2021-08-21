import { SearchTodoListsRecordResponseDto, SearchTodoListsRequestDto, } from '../../models';

export interface SearchTodoListsView {
  query: SearchTodoListsRequestDto;

  todoLists: SearchTodoListsRecordResponseDto[];
}
