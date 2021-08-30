export class SearchTodoListTasksRecordResponseDto {
  public constructor(
    public todoListTaskId: number  = 0,
    public title         : string  = '',
    public description   : string  = '',
    public startDate     : string  = '',
    public deadline      : string  = '',
    public completed     : boolean = false,
  ) { }
}
