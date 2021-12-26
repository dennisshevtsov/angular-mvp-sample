import { formatDate, } from '@angular/common';

export const DATE_FORMAT: string = 'yyyy-MM-dd';
export const DATE_LOCALE: string = 'en-US';

export class DateFormatter {
  public static toDate(date: number): string {
    return formatDate(date, DATE_FORMAT, DATE_LOCALE);
  }
}
