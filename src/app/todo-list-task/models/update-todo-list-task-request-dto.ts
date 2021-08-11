export class UpdateTodoListTaskRequestDto {
  public constructor(
    public todoListId: string,
    public todoListTaskId: string,
    public title: string,
    public description: string,
    public start: string,
    public end: string,
  ) {}
}
