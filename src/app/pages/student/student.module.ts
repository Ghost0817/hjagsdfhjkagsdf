import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    StudentRoutingModule,
    MatIconModule
  ],
  schemas: []
})
export class StudentModule { }
