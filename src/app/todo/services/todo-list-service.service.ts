import { Injectable, } from '@angular/core';
import { AddTodoListRequestDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodoListServiceService {
  public constructor() { }

  public addTodoList(addTodoListRequestDto: AddTodoListRequestDto): void {}
}
