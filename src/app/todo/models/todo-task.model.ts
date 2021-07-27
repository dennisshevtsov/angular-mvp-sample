export class TodoTask {
  public constructor(
    public todoTaskId: number,
    public title: string,
    public description: string,
    public done: boolean,
  ) {}
}
