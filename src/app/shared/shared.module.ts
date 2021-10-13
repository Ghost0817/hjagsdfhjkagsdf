import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { BButtonComponent } from './b-button/b-button.component';

@NgModule({
  declarations: [
    DialogComponent,
    BButtonComponent
  ],
  imports: [
  ],
  providers: [
  ],
  exports: [
      DialogComponent,
      BButtonComponent
  ]
})
export class SharedModule { }
