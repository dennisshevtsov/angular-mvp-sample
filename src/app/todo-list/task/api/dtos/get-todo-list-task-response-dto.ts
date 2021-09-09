export class GetTodoListTaskResponseDto {
  public constructor(
    public title      : string,
    public description: string,
    public startDate  : string,
    public deadline   : string,
  ) { }
}
