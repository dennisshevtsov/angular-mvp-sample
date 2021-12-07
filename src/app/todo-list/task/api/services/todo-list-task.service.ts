import { Injectable, } from '@angular/core';

import { AddTodoListTaskRequestDto,
         AddTodoListTaskResponseDto,
         CompleteTodoListTaskRequestDto,
         DeleteTodoListTaskRequestDto,
         GetTodoListTaskRequestDto,
         GetTodoListTaskResponseDto,
         SearchTodoListTasksRecordResponseDto,
         SearchTodoListTasksRequestDto,
         TodoListTaskTimeDto,
         UncompleteTodoListTaskRequestDto,
         UpdateTodoListTaskRequestDto,         } from '../dtos';

@Injectable({
  providedIn: 'root',
})
export class TodoListTaskService {
  private readonly todoListTasksMap : Map<number, {
    todoListTaskId: number,
    completed     : boolean,
    title         : string,
    description   : string,
    date          : string,
    time: {
      fullDay : boolean,
      start   : string,
      end     : string,
    },
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
        todoListTask.completed,
        todoListTask.title,
        todoListTask.description,
        todoListTask.date,
        new TodoListTaskTimeDto(
          todoListTask.time.fullDay,
          todoListTask.time.start,
          todoListTask.time.end,
        ),
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
      completed: false,
      title: addTodoListTaskRequestDto.title,
      description: addTodoListTaskRequestDto.description,
      date: addTodoListTaskRequestDto.date,
      time: {
        fullDay: addTodoListTaskRequestDto.time.fullDay,
        start: addTodoListTaskRequestDto.time.start,
        end: addTodoListTaskRequestDto.time.end,
      },
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
      todoListTask.time.fullDay = updateTodoListTaskRequestDto.time.fullDay;
      todoListTask.time.start = updateTodoListTaskRequestDto.time.start;
      todoListTask.time.end = updateTodoListTaskRequestDto.time.end;
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
