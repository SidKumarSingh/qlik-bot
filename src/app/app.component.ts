import { Component } from '@angular/core';
//import { LoginPageComponent } from './login-page/login-page.component';
import {DealerSummPageComponent } from './dealer-summ-page/dealer-summ-page.component';
import { OnsNavigator } from 'ngx-onsenui';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialPage = DealerSummPageComponent;
}
