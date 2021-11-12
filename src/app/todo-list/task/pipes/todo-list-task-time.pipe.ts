import { Pipe, PipeTransform, } from '@angular/core';

@Pipe({
  name: 'todoListTaskTime',
})
export class TodoListTaskTimePipe implements PipeTransform {
  transform(value: any): any {
    if (value.fullDay) {
      return value.date;
    }

    return `${value.date} ${value.startTime} - ${value.endTime}`;
  }
}
