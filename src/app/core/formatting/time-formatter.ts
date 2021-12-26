import { formatDate, } from '@angular/common';

export const TIME_FORMAT: string = 'hh:mm';
export const DATE_LOCALE: string = 'en-US';

export class TimeFormatter {
  public static toTime(date: number): string {
    return formatDate(date, TIME_FORMAT, DATE_LOCALE);
  }
}
