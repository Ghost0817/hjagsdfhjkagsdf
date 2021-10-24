import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypingTestComponent } from './typing-test.component';


const routes: Routes = [{
  path: '',
  component: TypingTestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypingTestRoutingModule { }
