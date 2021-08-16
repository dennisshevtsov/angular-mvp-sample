export class UpdateTodoListRequestDto {
  public constructor(
    public todoListId: number = 0,
    public title: string = '',
    public description: string = '',
  ) {}
}
