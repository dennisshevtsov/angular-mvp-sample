export const ONE_HOUR_IN_MILLISECONDS = 1 * 60 * 60 * 1000;

export class Calendar {
  public static now(): number {
    return new Date(Date.now()).getUTCDate();
  }
}
