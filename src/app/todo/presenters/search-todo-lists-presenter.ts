import { GetTodoListRecordResponseDto, } from "../models";
import { SearchTodoListsView, } from "../views";

export class SearchTodoListsPresenter {
  public constructor(
    private readonly view: SearchTodoListsView,
  ) {}

  public search(): void {
    this.view.loadTodoLists([
      new GetTodoListRecordResponseDto('49d0a40f-28ed-4332-9335-f55735476b7f', 'test'),
      new GetTodoListRecordResponseDto('c3b3125f-b002-48f0-bc13-ab12e6609f42', 'test'),
      new GetTodoListRecordResponseDto('53eba009-1efc-4885-8bc7-d2478e9f7bb7', 'test'),
      new GetTodoListRecordResponseDto('35817714-faa2-4f20-8e03-2f32d3ddb667', 'test'),
      new GetTodoListRecordResponseDto('be10e857-d057-4dbf-bf48-8ea7e02597c9', 'test'),
    ]);
  }
}
