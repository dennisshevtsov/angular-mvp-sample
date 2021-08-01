import { GetTodoListRecordResponseDto, } from '../../models';

export interface SearchTodoListsView {
  loadDatasource(datasource: GetTodoListRecordResponseDto[]): void;
}
