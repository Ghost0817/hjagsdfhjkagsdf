import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandompasswordgenerateRoutingModule } from './randompasswordgenerate-routing.module';
import { RandompasswordgenerateComponent } from './randompasswordgenerate.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [RandompasswordgenerateComponent, CookiesPolicyComponent, PrivacyPolicyComponent],
  imports: [
    CommonModule,
    RandompasswordgenerateRoutingModule
  ]
})
export class RandompasswordgenerateModule { }
