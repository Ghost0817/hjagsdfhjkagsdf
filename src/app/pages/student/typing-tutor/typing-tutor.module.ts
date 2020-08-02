import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypingTutorRoutingModule } from './typing-tutor-routing.module';
import { TypingTutorComponent } from './typing-tutor.component';


@NgModule({
  declarations: [TypingTutorComponent],
  imports: [
    CommonModule,
    TypingTutorRoutingModule
  ]
})
export class TypingTutorModule { }
