export class SearchTodoItemResponseDto {
  public constructor(
    public todoItemId: string,
    public title: string,
    public start: string,
    public end: string,
    public completed: boolean,
  ) { }
}
