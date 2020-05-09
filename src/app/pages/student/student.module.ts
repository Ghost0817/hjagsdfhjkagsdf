import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
