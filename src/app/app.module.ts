import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SummPageComponent } from './summ-page/summ-page.component';
import { DealerSummPageComponent } from './dealer-summ-page/dealer-summ-page.component';
import { DealerSalesPageComponent } from './dealer-sales-page/dealer-sales-page.component';
import { DealerOutsPageComponent } from './dealer-outs-page/dealer-outs-page.component';
import { DealerIncPageComponent } from './dealer-inc-page/dealer-inc-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    SummPageComponent,
    DealerSummPageComponent,
    DealerSalesPageComponent,
    DealerOutsPageComponent,
    DealerIncPageComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    LoginPageComponent,
    SummPageComponent,
    DealerSummPageComponent,
    DealerSalesPageComponent,
    DealerOutsPageComponent,
    DealerIncPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
