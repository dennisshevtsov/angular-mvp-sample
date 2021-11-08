export class AddTodoListTaskRequestDto {
  public constructor(
    public todoListId : number  = 0,
    public title      : string  = '',
    public date       : string  = '',
    public fullDay    : boolean = false,
    public startTime  : string = '',
    public endTime    : string = '',
    public description: string = '',
  ) { }
}
