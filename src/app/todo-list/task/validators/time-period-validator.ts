import { AbstractControl, ValidationErrors, } from '@angular/forms';

export function timePeriodValidator(timePeriodControl: AbstractControl)
  : ValidationErrors | null {
  const fullDayControl = timePeriodControl.get('fullDay');

  if (fullDayControl && !fullDayControl.value) {
    const startControl = timePeriodControl.get('start')!;
    let start;

    startControl.setErrors(null);

    if (!startControl.pristine || startControl.touched || startControl.dirty) {
      start = startControl.value;
    }

    if (start === '') {
      startControl.setErrors({
        required: true,
      });

      return null;
    }

    const endControl = timePeriodControl.get('end')!;
    let end;

    endControl.setErrors(null);

    if (!endControl.pristine || endControl.touched || endControl.dirty) {
      end = endControl.value;
    }

    if (end === '') {
      endControl.setErrors({
        required: true,
      });

      return null;
    }

    if (start && end) {
      const startParts = start.split(':');
      const endParts = end.split(':');

      if (startParts[0] > endParts[0] ||
          (startParts[0] == endParts[0] &&
           startParts[1] > endParts[1])) {
        startControl.setErrors({
          startBeforeEnd: true,
        });
        endControl.setErrors({
          startBeforeEnd: true,
        });
      }
    }
  }

  return null;
}
