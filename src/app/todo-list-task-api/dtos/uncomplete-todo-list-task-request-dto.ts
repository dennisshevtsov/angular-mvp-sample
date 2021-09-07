export class UncompleteTodoListTaskRequestDto {
  public constructor(
    public todoListId: number,
    public todoListTaskId: number,
  ) { }
}
