export class GetTodoListTaskRequestDto {
  public constructor(
    public todoListId    : number = 0,
    public todoListTaskId: number = 0,
  ) { }
}
