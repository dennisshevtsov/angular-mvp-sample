import { SearchTodoListsRecordResponseDto,
         SearchTodoListsRequestDto,        } from '../../../todo-list-api';

export interface SearchTodoListsView {
  query: SearchTodoListsRequestDto;

  todoLists: SearchTodoListsRecordResponseDto[];
}
