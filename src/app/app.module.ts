import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PictureDivComponent } from './picture-div/picture-div.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { HomeComponent } from './home/home.component';
import { MultiInputTmplComponent } from './multi-input-tmpl/multi-input-tmpl.component';
import { ClassDisplayComponent } from './class-display/class-display.component';
import { TableComponent } from './table/table.component';
import { Practice01Component } from './practice/practice01/practice01.component';
import { Practice02Component } from './practice/practice02/practice02.component';
import { ButtonBoxComponent } from './button-box/button-box.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    PictureDivComponent,
    NavItemComponent,
    HomeComponent,
    MultiInputTmplComponent,
    ClassDisplayComponent,
    TableComponent,
    Practice01Component,
    Practice02Component,
    ButtonBoxComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
