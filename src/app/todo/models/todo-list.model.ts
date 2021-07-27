import { TodoTask, } from "./todo-task.model";

export class TodoList {
  public constructor(
    public todoListId: string,
    public title: string,
    public description?: string,
    public tasks?: TodoTask[],
  ) {}
}
