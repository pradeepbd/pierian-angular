import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './blog-page/blog-page.component';



@NgModule({
  declarations: [BlogPageComponent],
  imports: [
    CommonModule
  ],
  providers:[],
  exports: [BlogPageComponent]
})
export class BlogModule { }
