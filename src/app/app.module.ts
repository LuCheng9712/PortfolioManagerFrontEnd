import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetsComponent } from './assets/assets.component';
import { InsightsComponent } from './insights/insights.component';
import { CashaccountComponent } from './assets/cashaccount/cashaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    InsightsComponent,
    CashaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
