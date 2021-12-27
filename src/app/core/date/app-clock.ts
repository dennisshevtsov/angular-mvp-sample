import { Injectable, } from '@angular/core';

export const MILLISECONDS_IN_HOUR = 1 * 60 * 60 * 1000;
export const MILLISECONDS_IN_MENUTE = 1 * 60 * 1000;

@Injectable({
  providedIn: 'root',
})
export class AppClock {
  public time(now: Date = new Date()): number {
    return now.getUTCHours() * MILLISECONDS_IN_HOUR +
           now.getUTCMinutes() * MILLISECONDS_IN_MENUTE;
  }

  public date(now: Date = new Date()): number {
    return Date.UTC(now.getUTCFullYear(),
                    now.getUTCMonth(),
                    now.getUTCDate());
  }

  public now(now: Date = new Date()): number {
    return this.date(now) + this.time(now)
  }
}
