import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureDivComponent } from '../app/picture-div/picture-div.component';
import { HomeComponent } from '../app/home/home.component';
import { MultiInputTmplComponent } from '../app/multi-input-tmpl/multi-input-tmpl.component';
import { ClassDisplayComponent } from '../app/class-display/class-display.component';
import { TableComponent } from '../app/table/table.component';
import { Practice01Component } from '../app/practice/practice01/practice01.component';
import { ButtonBoxComponent } from '../app/button-box/button-box.component';
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
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'practice/practice01',
    component: Practice01Component
  },
  {
    path: 'button-box',
    component: ButtonBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
