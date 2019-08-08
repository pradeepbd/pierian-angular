import { CustRegService } from './../cust-reg.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  // providers : [CustRegService]
})
export class Comp1Component implements OnInit {

  constructor(
    private custReg: CustRegService
  ) { }

  ngOnInit() {
  }

  onNext(usNm: string) {
    this.custReg.domain.name = usNm
    console.log(`Next Clicked ${this.custReg.cnt++}`)
  }
}

// let ser = new CustRegService()
// let cmp1  = new Comp1Component(ser)
