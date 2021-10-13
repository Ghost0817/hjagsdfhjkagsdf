import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes.component';


const routes: Routes = [{
  path: '',
  component: QuotesComponent,
  children: [{
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }, {
    path: 'index',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
