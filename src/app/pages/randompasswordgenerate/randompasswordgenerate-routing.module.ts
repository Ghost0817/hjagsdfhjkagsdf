import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandompasswordgenerateComponent } from './randompasswordgenerate.component';


const routes: Routes = [{
  path: '',
  component: RandompasswordgenerateComponent,
  children: [{
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }, {
    path: 'index',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  }, {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  }, {
    path: 'cookies-policy',
    loadChildren: () => import('./cookies-policy/cookies-policy.module').then(m => m.CookiesPolicyModule)
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandompasswordgenerateRoutingModule { }
