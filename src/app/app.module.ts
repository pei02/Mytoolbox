import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureDivComponent } from './picture-div/picture-div.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { HomeComponent } from './home/home.component';
import { MultiInputTmplComponent } from './multi-input-tmpl/multi-input-tmpl.component';
import { ClassDisplayComponent } from './class-display/class-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureDivComponent,
    NavItemComponent,
    HomeComponent,
    MultiInputTmplComponent,
    ClassDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
