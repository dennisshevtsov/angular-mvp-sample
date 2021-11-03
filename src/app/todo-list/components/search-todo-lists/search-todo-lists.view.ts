import { DeleteTodoListRequestDto,
         SearchTodoListsRecordResponseDto,
         SearchTodoListsRequestDto,        } from '../../api';

export interface SearchTodoListsView {
  selected: DeleteTodoListRequestDto;

  query: SearchTodoListsRequestDto;

  datasource: SearchTodoListsRecordResponseDto[];
}
