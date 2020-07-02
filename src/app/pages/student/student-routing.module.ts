import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { NoAuthGuard } from 'src/app/core/no-auth.guard';
import { AuthGuard } from 'src/app/core/auth.guard';
// import { LessonsComponent } from './lessons/lessons.component';
// import { LessonComponent } from './lesson/lesson.component';
// import { TestsComponent } from './tests/tests.component';
// import { TypingTestComponent } from './typing-test/typing-test.component';


const routes: Routes = [{
  path: '',
  component: StudentComponent,
  children: [{
    path: '',
    redirectTo: 'tests',
    pathMatch: 'full'
  }, {
    path: 'lessons',
    loadChildren: () => import('./lessons/lessons.module').then(m => m.LessonsModule),
    canActivate: [AuthGuard]
  }, {
    path: 'lesson',
    loadChildren: () => import('./lesson/lesson.module').then(m => m.LessonModule),
    canActivate: [AuthGuard]
  }, {
    path: 'tests',
    loadChildren: () => import('./tests/tests.module').then(m => m.TestsModule),
    canActivate: [AuthGuard]
  }, {
    path: 'typing-test',
    loadChildren: () => import('./typing-test/typing-test.module').then(m => m.TypingTestModule),
    canActivate: [AuthGuard]
  }, {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  }, {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule),
  }
  ]
}
  // }, 
  // {
  //   path: 'lessons',
  //   loadChildren: () => import('./lessons/lessons.module').then(m => m.LessonsModule)
  // }, 
  // {
  //   path: 'lesson',
  //   loadChildren: () => import('./lesson/lesson.module').then(m => m.LessonModule)
  // }, 
  // {
  //   path: 'tests',
  //   loadChildren: () => import('./tests/tests.module').then(m => m.TestsModule)
  // }, 
  // {
  //   path: 'typing-test',
  //   loadChildren: () => import('./typing-test/typing-test.module').then(m => m.TypingTestModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
