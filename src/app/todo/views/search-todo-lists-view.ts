import { GetTodoListRecordResponseDto, } from "../models";

export interface SearchTodoListsView {
  loadTodoLists(todoLists: GetTodoListRecordResponseDto[]): void;
}
