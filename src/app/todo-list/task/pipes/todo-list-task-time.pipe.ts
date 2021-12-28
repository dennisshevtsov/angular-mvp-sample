import { Pipe, PipeTransform, } from '@angular/core';

@Pipe({
  name: 'todoListTaskTime',
})
export class TodoListTaskTimePipe implements PipeTransform {
  transform(value: any): any {
    if (value.fullDay) {
      return value.day;
    }

    return `${value.day} ${value.start}-${value.end}`;
  }
}
