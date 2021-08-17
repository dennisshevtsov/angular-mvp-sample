export class UpdateTodoListTaskRequestDto {
  public constructor(
    public todoListId: number,
    public todoListTaskId: number,
    public title: string,
    public description: string,
    public startDate: string,
    public deadline: string,
  ) {}
}
