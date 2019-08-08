import { CustRegService } from './../cust-reg.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  // providers: [CustRegService]
})
export class Comp2Component implements OnInit {

  constructor(
    private custReg: CustRegService
  ) { }

  ngOnInit() {
  }

  onFinalSubmit(mobile: string) {
    console.log(`Final Submit Clicked ${this.custReg.cnt++}`)
    this.custReg.domain.mobile = mobile
    console.log(this.custReg.domain)
  }
}
