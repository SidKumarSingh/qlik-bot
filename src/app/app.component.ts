import { Component, ViewChild } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LoginPageComponent } from './login-page/login-page.component';
//import { DealerPageComponent } from './dealer-page/dealer-page.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	initialPage = LoginPageComponent;
	
}