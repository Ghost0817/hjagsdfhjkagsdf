import { NgModule } from '@angular/core';
import { XRatingComponent } from './x-rating/x-rating.component';
import { XTableComponent } from './x-table/x-table.component';
import { XButtonComponent } from './x-button/x-button.component';
import { XDialogComponent } from './x-dialog/x-dialog.component';
import { XFormComponent } from './x-form/x-form.component';
import { XInputComponent } from './x-input/x-input.component';
import { XMessagesComponent } from './x-messages/x-messages.component';
import { CommonModule } from '@angular/common';
import { XFieldErrorsComponent } from './x-field-errors/x-field-errors.component';

@NgModule({
  declarations: [
    XRatingComponent,
    XTableComponent,
    XButtonComponent,
    XDialogComponent,
    XFormComponent,
    XInputComponent,
    XMessagesComponent,
    XFieldErrorsComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
  ],
  exports: [
      XRatingComponent,
      XTableComponent,
      XButtonComponent,
      XDialogComponent,
      XFormComponent,
      XInputComponent,
      XMessagesComponent
  ]
})
export class SharedModule { }
