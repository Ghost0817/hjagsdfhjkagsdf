import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { BButtonComponent } from './b-button/b-button.component';
import { XRatingComponent } from './x-rating/x-rating.component';
import { XTableComponent } from './x-table/x-table.component';
import { XButtonComponent } from './x-button/x-button.component';
import { XDialogComponent } from './x-dialog/x-dialog.component';
import { XFormComponent } from './x-form/x-form.component';
import { XInputComponent } from './x-input/x-input.component';

@NgModule({
  declarations: [
    XRatingComponent,
    XTableComponent,
    XButtonComponent,
    XDialogComponent,
    XFormComponent,
    XInputComponent
  ],
  imports: [
  ],
  providers: [
  ],
  exports: [
      XRatingComponent,
      XTableComponent,
      XButtonComponent,
      XDialogComponent,
      XFormComponent,
      XInputComponent
  ]
})
export class SharedModule { }
