import { Injectable, } from '@angular/core';

import { AddTodoListTaskRequestDto,
         AddTodoListTaskResponseDto,
         CompleteTodoListTaskRequestDto,
         DeleteTodoListTaskRequestDto,
         GetTodoListTaskRequestDto,
         GetTodoListTaskResponseDto,
         SearchTodoListTasksRecordResponseDto,
         SearchTodoListTasksRequestDto,
         UncompleteTodoListTaskRequestDto,
         UpdateTodoListTaskRequestDto,         } from '../dtos';

@Injectable({
  providedIn: 'root',
})
export class TodoListTaskService {
  private readonly todoListTasksMap : Map<number, {
    todoListTaskId: number,
    title         : string,
    date          : string,
    fullDay       : boolean,
    startTime     : string,
    endTime       : string,
    description   : string,
    completed     : boolean,
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
        todoListTask.date,
        todoListTask.fullDay,
        todoListTask.startTime,
        todoListTask.endTime,
        todoListTask.description,
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
      date: addTodoListTaskRequestDto.date,
      fullDay: addTodoListTaskRequestDto.fullDay,
      startTime: addTodoListTaskRequestDto.startTime,
      endTime: addTodoListTaskRequestDto.endTime,
      description: addTodoListTaskRequestDto.description,
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
      todoListTask.date = updateTodoListTaskRequestDto.date;
      todoListTask.fullDay = updateTodoListTaskRequestDto.fullDay;
      todoListTask.startTime = updateTodoListTaskRequestDto.startTime;
      todoListTask.endTime = updateTodoListTaskRequestDto.endTime;
    }
  }

  public completeTodoListTask(
    completeTodoListTaskRequestDto: CompleteTodoListTaskRequestDto)
    : void {
    const todoListTasks = this.todoListTasksMap.get(
      completeTodoListTaskRequestDto.todoListId)!;

    if (todoListTasks) {
      const todoListTaskIndex = todoListTasks.findIndex(
        todoListTask => todoListTask.todoListTaskId === completeTodoListTaskRequestDto.todoListTaskId);

      if (todoListTaskIndex > -1) {
        const todoListTask = todoListTasks[todoListTaskIndex];

        todoListTask.completed = true;
      }
    }
  }

  public uncompleteTodoListTask(
    uncompleteTodoListTaskRequestDto: UncompleteTodoListTaskRequestDto)
    : void {
    const todoListTasks = this.todoListTasksMap.get(
      uncompleteTodoListTaskRequestDto.todoListId)!;

    if (todoListTasks) {
      const todoListTaskIndex = todoListTasks.findIndex(
        todoListTask => todoListTask.todoListTaskId === uncompleteTodoListTaskRequestDto.todoListTaskId);

      if (todoListTaskIndex > -1) {
        const todoListTask = todoListTasks[todoListTaskIndex];

        todoListTask.completed = false;
      }
    }
  }

  public deleteTodoListTask(
    deleteTodoListTaskRequestDto: DeleteTodoListTaskRequestDto)
    : void {
      const todoListTasks = this.todoListTasksMap.get(
        deleteTodoListTaskRequestDto.todoListId)!;

      if (todoListTasks) {
        const todoListTaskIndex = todoListTasks.findIndex(
          todoListTask => todoListTask.todoListTaskId === deleteTodoListTaskRequestDto.todoListTaskId);

        if (todoListTaskIndex > -1) {
          todoListTasks.splice(todoListTaskIndex, 1);
        }
      }
  }
}
