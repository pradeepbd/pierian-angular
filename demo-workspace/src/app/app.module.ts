import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

import { DirectivesComponent } from './directives/directives.component';
import { SizerDirective } from './directives/sizer.directive';
import { PricingComponent } from './pricing/pricing.component';
import { NavComponent } from './pricing/nav/nav.component';
import { InfoComponent } from './pricing/info/info.component';
import { CardConatinerComponent } from './pricing/card-conatiner/card-conatiner.component';
import { CardComponent } from './pricing/card-conatiner/card/card.component';

import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,

    DirectivesComponent,
    SizerDirective,
    PricingComponent,
    NavComponent,
    InfoComponent,
    CardConatinerComponent,
    CardComponent,

    CustomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
