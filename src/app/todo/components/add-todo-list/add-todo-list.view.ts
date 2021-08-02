import { AddTodoListRequestDto, } from '../../models';

export interface AddTodoListView {
  get datasource(): AddTodoListRequestDto;
}
