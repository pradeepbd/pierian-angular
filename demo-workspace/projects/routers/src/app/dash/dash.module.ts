import { AppRoutingModule } from './../app-routing.module';
import { NavModule } from './../nav/nav.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashPageComponent } from './dash-page/dash-page.component';



@NgModule({
  declarations: [DashPageComponent],
  imports: [
    CommonModule,
    NavModule,
    AppRoutingModule
  ],
  exports:[DashPageComponent]
})
export class DashModule { }
