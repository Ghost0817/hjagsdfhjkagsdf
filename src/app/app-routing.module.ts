import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
}, {
  path: '',
  children: [
    {
      path: 'home',
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'student',
      loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule)
    },
    {
      path: 'teacher',
      loadChildren: () => import('./pages/teacher/teacher.module').then(m => m.TeacherModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
