import { UpdateTodoListRequestDto } from "../../models";

export interface UpdateTodoListView {
  datasource: UpdateTodoListRequestDto;

  update(): void;
}
