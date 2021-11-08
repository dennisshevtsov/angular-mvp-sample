export class GetTodoListTaskResponseDto {
  public constructor(
    public title      : string,
    public date       : string,
    public fullDay    : boolean,
    public startTime  : string,
    public endTime    : string,
    public description: string,
  ) { }
}
