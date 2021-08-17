export class AddTodoListTaskRequestDto {
  public constructor(
    public todoListId: number,
    public title: string,
    public description: string,
    public startDate: string,
    public deadline: string,
  ) { }
}
