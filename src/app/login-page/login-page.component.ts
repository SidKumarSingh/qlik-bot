import { Component } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {
	userid: string = '';
	pswd: string = '';
	login() {
		if(this.userid==='harvindar.sharma@bluestarindia.com' && this.pswd==='topsecret') {
			ons.notification.alert('Login successful');
		} else {
			ons.notification.toast('Invalid login details', {timeout: 3000});
			this.pswd='';
		}
	}
 }
