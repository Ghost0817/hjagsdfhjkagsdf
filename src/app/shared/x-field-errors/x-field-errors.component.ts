import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'x-field-errors',
  templateUrl: './x-field-errors.component.html',
  styleUrls: ['./x-field-errors.component.scss']
})
export class XFieldErrorsComponent {

  @Input()
  public formField: FormControl;

  constructor() { }

}
