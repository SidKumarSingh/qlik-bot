import { Component } from '@angular/core';
import * as ons from 'onsenui';
import { OnsNavigator } from 'ngx-onsenui';

import { HomePageComponent } from '../home-page/home-page.component';

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
			this._navigator.element.pushPage(HomePageComponent);
		} else {
			ons.notification.toast('Invalid login details', {timeout: 2000});
			this.pswd='';
		}
	}
 }
