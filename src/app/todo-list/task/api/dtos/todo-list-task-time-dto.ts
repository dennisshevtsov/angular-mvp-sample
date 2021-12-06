export class TodoListTaskTimeDto {
  public constructor(
    public fullDay : boolean = false,
    public start   : string  = '',
    public end     : string  = '',
  ) {}
}
