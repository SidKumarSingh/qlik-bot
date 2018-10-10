import { Component } from '@angular/core';
import * as ons from 'onsenui';
import { SummPageComponent } from '../summ-page/summ-page.component';
import { OnsNavigator } from 'ngx-onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

	constructor (private _navigator: OnsNavigator) {};

	userid: string = '';
	pswd: string = '';
	
	login() {
		if(this.userid==='harvindar.sharma@bluestarindia.com' && this.pswd==='topsecret') {
			this._navigator.element.pushPage(SummPageComponent);
		} else {
			ons.notification.toast('Invalid login details', {timeout: 2000});
			this.pswd='';
		}
	}
 }
