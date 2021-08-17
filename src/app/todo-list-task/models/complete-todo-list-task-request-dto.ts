export class CompleteTodoListTaskRequestDto {
  public constructor(
    public todoListId: number,
    public todoListTaskId: number,
  ) { }
}
