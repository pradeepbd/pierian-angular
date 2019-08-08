import { Component, OnInit } from '@angular/core';
import { ProgressService } from './progress.service';

@Component({
  selector: 'app-op-btns',
  templateUrl: './op-btns.component.html',
  styleUrls: ['./op-btns.component.css']
})
export class OpBtnsComponent implements OnInit {

  constructor(
    private progressService: ProgressService
  ) { }

  ngOnInit() {
  }

  onOperation(wh: number) {
    if (wh == 1) {
      // -
      this.progressService.makeProgress(true)

      console.log('Minus')
    } else {
      //+

      this.progressService.makeProgress(false)
      console.log('Pluss')
    }
  }
}
