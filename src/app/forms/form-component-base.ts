import { FormGroup, } from "@angular/forms";

export abstract class FormComponentBase {
  private formValue: FormGroup | undefined;

  public get form(): FormGroup {
    return this.formValue ?? (this.formValue = this.buildForm());
  }

  protected abstract buildForm(): FormGroup;

  public isValid(controlName: string): boolean {
    const control = this.form.get(controlName);

    return control == null || !(control.touched || control.dirty) || control.valid;
  }

  public hasErrors(controlName: string): boolean {
    const control = this.form.get(controlName);

    return control != null && (control.touched || control.dirty) && control.errors != null;
  }

  public hasError(controlName: string, errorCode: string): boolean {
    const control = this.form.get(controlName);

    return control != null && control.hasError(errorCode);
  }
}
