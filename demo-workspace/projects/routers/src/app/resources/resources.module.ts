import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesPageComponent } from './resources-page/resources-page.component';



@NgModule({
  declarations: [ResourcesPageComponent],
  imports: [
    CommonModule
  ],
  exports: [ResourcesPageComponent]
})
export class ResourcesModule { }
