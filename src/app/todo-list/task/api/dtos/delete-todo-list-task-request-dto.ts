export class DeleteTodoListTaskRequestDto {
  public constructor(
    public readonly todoListId:     number,
    public readonly todoListTaskId: number,
  ) {}
}
