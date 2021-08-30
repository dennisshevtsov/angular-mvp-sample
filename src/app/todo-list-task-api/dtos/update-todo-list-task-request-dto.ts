export class UpdateTodoListTaskRequestDto {
  public constructor(
    public todoListId    : number = 0,
    public todoListTaskId: number = 0,
    public title         : string = '',
    public description   : string = '',
    public startDate     : string = '',
    public deadline      : string = '',
  ) {}
}
