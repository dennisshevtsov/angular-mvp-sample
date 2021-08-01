import { UpdateTodoListRequestDto } from "../../models";

export interface UpdateTodoListView {
  set datasource(datasource: UpdateTodoListRequestDto);

  get datasource(): UpdateTodoListRequestDto;

  update(): void;
}
