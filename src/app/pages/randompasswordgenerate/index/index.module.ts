import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
