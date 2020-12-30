import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureDivComponent } from '../app/picture-div/picture-div.component';
import { HomeComponent } from '../app/home/home.component';
import { MultiInputTmplComponent } from '../app/multi-input-tmpl/multi-input-tmpl.component';
import { ClassDisplayComponent } from '../app/class-display/class-display.component';
const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  {
    path: 'picture-div',
    component: PictureDivComponent
  },
  {
    path: 'multi-input-tmpl',
    component: MultiInputTmplComponent
  },
  {
    path: 'class-display',
    component: ClassDisplayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
