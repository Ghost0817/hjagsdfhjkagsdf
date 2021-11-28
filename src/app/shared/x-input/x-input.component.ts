import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'x-input',
  templateUrl: './x-input.component.html',
  styleUrls: ['./x-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> XInputComponent),
      multi: true,
    }
  ]
})
export class XInputComponent implements ControlValueAccessor {

  @Input()
  public parentForm: FormGroup;

  @Input()
  public fieldName: string;

  @Input()
  public fieldType: string;

  @Input()
  public formLabel: string;

  public value: string;

  public changed: (value: string ) => void;

  public touched: () => void;

  public isDisabled: boolean;

  constructor() { }

  get formField  (): FormControl {
    return this.parentForm.get(this.fieldName) as FormControl;
  }

  writeValue(obj: any): void {
    //throw new Error('Method not implemented.');
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    //throw new Error('Method not implemented.');
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    //throw new Error('Method not implemented.');
    this.touched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
    this.isDisabled = isDisabled;
  }

}
