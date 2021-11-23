import { AbstractControl, ValidationErrors, } from '@angular/forms';

export class TimeValidators {
  public static endAfterStart(control: AbstractControl)
  : ValidationErrors | null {
    return null;
  }
}
