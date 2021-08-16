export class GetTodoListResponseDto {
  public constructor(
    public todoListId: number,
    public title: string,
    public description: string,
  ) {}
}
