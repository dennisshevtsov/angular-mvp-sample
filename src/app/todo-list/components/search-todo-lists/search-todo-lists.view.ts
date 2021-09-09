import { SearchTodoListsRecordResponseDto,
         SearchTodoListsRequestDto,        } from '../../api';

export interface SearchTodoListsView {
  query: SearchTodoListsRequestDto;

  todoLists: SearchTodoListsRecordResponseDto[];
}
