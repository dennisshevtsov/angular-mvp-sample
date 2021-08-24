export class GetTodoListTaskRequestDto {
  public constructor(
    public todoListId: number,
    public todoListTaskId: number,
  ) { }
}
