import { Directive } from '@angular/core';
import { FormGroup, ValidationErrors, Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { checkUniquenessValidator } from './checkUniquenessValidator';

@Directive({
  selector: '[validateUniqueness]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UniquenessValidator, multi: true }]
})
export class UniquenessValidator implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
        return checkUniquenessValidator()(control);
    }

}