import { AbstractControl } from '@angular/forms';
//ES6 syntax doesn't work for the import below
const moment = require('moment');

export class DateValidator {
  static dateValidator(AC: AbstractControl) {
    if (AC && AC.value && !moment(AC.value, 'YYYY-MM-DD', true).isValid()) {
      return { dateValidator: true };
    }
    return null;
  }
}
