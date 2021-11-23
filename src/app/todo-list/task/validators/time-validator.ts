import { AbstractControl, ValidationErrors, } from '@angular/forms';

export class TimeValidator {
  public static endAfterStart(control: AbstractControl)
  : ValidationErrors | null {
    return null;
  }
}
