import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OnsenModule } from 'ngx-onsenui';

import { Globals } from './globals';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SummPageComponent } from './summ-page/summ-page.component';
import { DealerSalesPageComponent } from './dealer-sales-page/dealer-sales-page.component';
import { DealerOutsPageComponent } from './dealer-outs-page/dealer-outs-page.component';
import { DealerIncPageComponent } from './dealer-inc-page/dealer-inc-page.component';
import { DealerPageComponent } from './dealer-page/dealer-page.component';
import { DealerActPageComponent } from './dealer-act-page/dealer-act-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    SummPageComponent,
    DealerSalesPageComponent,
    DealerOutsPageComponent,
    DealerIncPageComponent,
    DealerPageComponent,
    DealerActPageComponent
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
    DealerSalesPageComponent,
    DealerOutsPageComponent,
    DealerIncPageComponent,
    DealerActPageComponent,
    DealerPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
