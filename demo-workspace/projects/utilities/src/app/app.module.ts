import { CustDialogComponent } from './cust-dialog/cust-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    AppComponent,
    CustDialogComponent,

  ],
  imports: [
    BrowserModule,

    NgbModule,
    Ng2SmartTableModule,
  ],
  providers: [],
  entryComponents : [CustDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
