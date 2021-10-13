import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypingTestRoutingModule } from './typing-test-routing.module';
import { TypingTestComponent } from './typing-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TypingTestComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    TypingTestRoutingModule
  ]
})
export class TypingTestModule { }
