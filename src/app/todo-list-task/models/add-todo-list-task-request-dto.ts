export class AddTodoListTaskRequestDto {
  public constructor(
    public todoListId: string,
    public title: string,
    public description: string,
    public start: string,
    public deadline: string,
  ) { }
}
