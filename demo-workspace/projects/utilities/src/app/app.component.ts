import { CustDialogComponent } from './cust-dialog/cust-dialog.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'utilities';

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz'
    }
  ];

  constructor(
    private modalService: NgbModal
  ) {

  }

  open() {
    const modalRef = this.modalService.open(CustDialogComponent);
    modalRef.componentInstance.myNm = 'Android';
  }

  // tslint:disable-next-line: ban-types
  onRowSelect(ev: Object) {
    console.log(ev);
  }
}
