import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavPageComponent } from './nav-page/nav-page.component';

@NgModule({
  declarations: [NavPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [NavPageComponent]
})
export class NavModule { }
