import { AbstractControl } from '@angular/forms';

export function CustomValid(forbiddenName: RegExp) {
  return (control: AbstractControl) => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
export function passordValid(controls: AbstractControl) {
  const password = controls.get('password');
  const confirmPasword = controls.get('confirmPasword');
  if (password?.pristine || confirmPasword?.pristine) {
    return null;
  }
  return password && confirmPasword && confirmPasword.value !== password.value
    ? { misMatch: true }
    : null;
}
// export function CustomValid(control: AbstractControl) {
//   const forbidden = /admin/.test(control.value);
//   return forbidden ? { 'forbiddenName': { value: control.value } } : null;
// }
