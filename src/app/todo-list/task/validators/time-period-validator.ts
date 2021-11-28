import { AbstractControl, ValidationErrors, } from '@angular/forms';

export function timePeriodValidator(timePeriodControl: AbstractControl)
  : ValidationErrors | null {
  const fullDayControl = timePeriodControl.get('fullDay');

  if (fullDayControl && !fullDayControl.value) {
    const startControl = timePeriodControl.get('start');
    let start;

    if (startControl && !startControl.pristine) {
      start = startControl.value;
    }

    if (start === '') {
      startControl!.setErrors({
        required: true,
      });

      return {
        startRequired: true,
      };
    }

    const endControl = timePeriodControl.get('end');
    let end;

    if (endControl && !endControl.pristine) {
      endControl!.setErrors({
        required: true,
      });

      end = endControl.value;
    }

    if (end === '') {
      return {
        endRequired: true,
      };
    }

    if (start && end) {
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
  }

  return null;
}
