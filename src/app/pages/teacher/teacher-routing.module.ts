import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [{
  path: '',
  component: TeacherComponent,
  // children: [{
  //   path: 'main',
  //   component: MainComponent
  // }]
}, 
{
  path: 'main',
  // component: MainComponent
  loadChildren: () => import('./main/main.module').then(m => m.MainModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
