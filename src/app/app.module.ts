import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetsComponent } from './assets/assets.component';
import { InsightsComponent } from './insights/insights.component';
import { CashaccountComponent } from './assets/cashaccount/cashaccount.component';
import { InvestmentComponent } from './assets/investment/investment.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    InsightsComponent,
    CashaccountComponent,
    InvestmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
