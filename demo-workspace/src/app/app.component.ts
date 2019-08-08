import { Component } from '@angular/core';
import { EvDt } from './custom/custom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ev: EvDt

  txt = 'Image result for angular componentsangular.io Components are the most basic building block of an UI in an Angular application. An Angular application is a tree of Angular components.'

  customComponentClicked(e: EvDt) {
    this.ev = e
  }

  myClk(e: MouseEvent) {
    console.log(e.target)
  }

  fnClk(el: any) {
    console.log(el)
    el.style.border = '1px solid red'
    this.txt = el.value
    // this.txt = str
  }
}
