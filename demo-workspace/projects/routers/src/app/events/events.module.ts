import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPageComponent } from './events-page/events-page.component';

@NgModule({
  declarations: [EventsPageComponent],
  imports: [
    CommonModule
  ],
  exports: [EventsPageComponent]
})
export class EventsModule { }
