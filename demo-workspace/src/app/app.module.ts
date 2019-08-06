import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HiComponent } from './second/hi.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    FirstComponent,
    SecondComponent,
    HiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
