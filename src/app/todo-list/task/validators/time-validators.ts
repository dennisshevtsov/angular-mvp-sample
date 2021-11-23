import { AbstractControl, ValidationErrors, ValidatorFn, } from '@angular/forms';

export class TimeValidators {
  public static endAfterStart(control: AbstractControl)
  : ValidationErrors | null {
    return null;
  }

  public static requiredIfNotFullDay(control: AbstractControl)
  : ValidatorFn | null {
    return null;
  }
}
