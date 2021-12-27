import { formatDate, } from '@angular/common';
import { Injectable } from '@angular/core';

export const DATE_FORMAT: string = 'yyyy-MM-dd';
export const DATE_LOCALE: string = 'en-US';

export const TIME_FORMAT: string = 'hh:mm';
export const TIME_LOCALE: string = DATE_LOCALE;

@Injectable({
  providedIn: 'root',
})
export class Formatter {
  public toLocalDate(date: number): string {
    return formatDate(date, DATE_FORMAT, DATE_LOCALE);
  }

  public fromLocalDate(date: string): number {
    return 0;
  }

  public toLocalTime(date: number): string {
    return formatDate(date, TIME_FORMAT, TIME_LOCALE);
  }

  public fromLocalTime(date: string): number {
    return 0;
  }
}
