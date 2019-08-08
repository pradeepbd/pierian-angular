import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  @Input()
  alTxt: string

  @Output()
  clicked: EventEmitter<EvDt> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  btnClick(dt: MouseEvent) {

    console.log(dt)

    let ev: EvDt = {
      txt: this.alTxt
    }
    this.clicked.emit(ev)
  }
}

export interface EvDt {
  txt: string
}
