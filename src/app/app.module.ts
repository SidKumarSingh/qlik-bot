import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SummPageComponent } from './summ-page/summ-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    SummPageComponent
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
    SummPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
