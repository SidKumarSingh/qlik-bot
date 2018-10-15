import { Component } from '@angular/core';

import { HomeMenuService } from '../home-menu.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent {

	constructor(private homemenuService: HomeMenuService) {	}

	openMenu() {
		this.homemenuService.open();
	}

}
