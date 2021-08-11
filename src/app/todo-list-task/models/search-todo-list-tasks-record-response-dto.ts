export class SearchTodoListTasksRecordResponseDto {
  public constructor(
    public todoListTaskId: string,
    public title: string,
    public description?: string,
    public start?: string,
    public deadline?: string,
    public completed?: boolean,
  ) { }
}
