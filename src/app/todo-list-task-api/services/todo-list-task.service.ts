import { Injectable, } from '@angular/core';

import { AddTodoListTaskRequestDto,
         AddTodoListTaskResponseDto,
         CompleteTodoListTaskRequestDto,
         GetTodoListTaskRequestDto,
         GetTodoListTaskResponseDto,
         SearchTodoListTasksRecordResponseDto,
         SearchTodoListTasksRequestDto,
         UpdateTodoListTaskRequestDto,         } from '../dtos';

@Injectable({
  providedIn: 'root',
})
export class TodoListTaskService {
  private readonly todoListTasksMap : Map<number, {
    todoListTaskId: number,
    title: string,
    description: string,
    startDate: string,
    deadline: string,
    completed: boolean,
  }[]> = new Map();

  public constructor() { }

  public getTodoListTask(
    getTodoListTaskRequestDto: GetTodoListTaskRequestDto)
    : GetTodoListTaskResponseDto | null {
    const todoListTasks = this.todoListTasksMap.get(getTodoListTaskRequestDto.todoListId);

    if (todoListTasks) {
      const todoListTaskIndex = todoListTasks.findIndex(
        todoListTask => todoListTask.todoListTaskId === getTodoListTaskRequestDto.todoListTaskId);

      if (todoListTaskIndex > -1) {
        const todoListTask = todoListTasks[todoListTaskIndex];

        return { ...todoListTask };
      }
    }

    return null;
  }

  public searchTodoListTasks(
    searchTodoListTasksRequestDto: SearchTodoListTasksRequestDto)
    : SearchTodoListTasksRecordResponseDto[] {
    const todoListTasks = this.todoListTasksMap.get(searchTodoListTasksRequestDto.todoListId);

    if (todoListTasks) {
      return todoListTasks.map(todoListTask => new SearchTodoListTasksRecordResponseDto(
        todoListTask.todoListTaskId,
        todoListTask.title,
        todoListTask.description,
        todoListTask.startDate,
        todoListTask.deadline,
        todoListTask.completed,
      ));
    }

    return [];
  }

  public addTodoListTask(
    addTodoListTaskRequestDto: AddTodoListTaskRequestDto)
    : AddTodoListTaskResponseDto {
    if (!this.todoListTasksMap.has(addTodoListTaskRequestDto.todoListId)) {
      this.todoListTasksMap.set(addTodoListTaskRequestDto.todoListId, []);
    }

    const todoListTasks = this.todoListTasksMap.get(addTodoListTaskRequestDto.todoListId)!;
    const todoListTaskId = todoListTasks.length + 1;

    todoListTasks.push({
      todoListTaskId: todoListTaskId,
      title: addTodoListTaskRequestDto.title,
      description: addTodoListTaskRequestDto.description,
      startDate: addTodoListTaskRequestDto.startDate,
      deadline: addTodoListTaskRequestDto.deadline,
      completed: false,
    });

    return new AddTodoListTaskResponseDto(todoListTaskId)
  }

  public updateTodoListTask(
    updateTodoListTaskRequestDto: UpdateTodoListTaskRequestDto)
    : void {
    const todoListTasks = this.todoListTasksMap.get(updateTodoListTaskRequestDto.todoListId)!;
    const todoListTaskIndex = todoListTasks.findIndex(todoListTask => todoListTask.todoListTaskId === updateTodoListTaskRequestDto.todoListTaskId);

    if (todoListTaskIndex > -1) {
      const todoListTask = todoListTasks[todoListTaskIndex];

      todoListTask.title = updateTodoListTaskRequestDto.title;
      todoListTask.description = updateTodoListTaskRequestDto.description;
      todoListTask.startDate = updateTodoListTaskRequestDto.startDate;
      todoListTask.deadline = updateTodoListTaskRequestDto.deadline;
    }
  }

  public completeTodoListTask(
    completeTodoListTaskRequestDto: CompleteTodoListTaskRequestDto)
    : void {
    const todoListTasks = this.todoListTasksMap.get(completeTodoListTaskRequestDto.todoListId)!;
    const todoListTaskIndex = todoListTasks.findIndex(todoListTask => todoListTask.todoListTaskId === completeTodoListTaskRequestDto.todoListTaskId);
    const todoListTask = todoListTasks[todoListTaskIndex];

    todoListTask.completed = true;
  }
}