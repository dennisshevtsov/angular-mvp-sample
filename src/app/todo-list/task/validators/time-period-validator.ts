import { AbstractControl, ValidationErrors, } from '@angular/forms';

export function timePeriodValidator(timePeriodControl: AbstractControl)
  : ValidationErrors | null {
  const fullDayControl = timePeriodControl.get('fullDay');

  if (fullDayControl && !fullDayControl.value) {
    const startControl = timePeriodControl.get('start');
    const endControl = timePeriodControl.get('end');

    let start;

    if (startControl && !startControl.pristine) {
      start = startControl.value;
    }

    let end;

    if (endControl && !endControl.pristine) {
      end = endControl.value;
    }

    if (start == null) {
      return {
        startRequired: true,
      };
    }

    if (end == null) {
      return {
        endRequired: true,
      };
    }

    const startParts = start.split(':');
    const endParts = end.split(':');

    if (startParts[0] > endParts[0] ||
        (startParts[0] == endParts[0] &&
          startParts[1] > endParts[1])) {
      return {
        endBeforeStart: true,
      };
    }
  }

  return null;
}
