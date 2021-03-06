import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from './core/no-auth.guard';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
},
{
  path: 'student',
  loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule),
},
{
  path: 'teacher',
  loadChildren: () => import('./pages/teacher/teacher.module').then(m => m.TeacherModule),
  canActivate: [AuthGuard]
},
{
  path: 'quotes',
  loadChildren: () => import('./pages/quotes/quotes.module').then(m => m.QuotesModule)
},
{
  path: 'randompasswordgenerate',
  loadChildren: () => import('./pages/randompasswordgenerate/randompasswordgenerate.module').then(m => m.RandompasswordgenerateModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
