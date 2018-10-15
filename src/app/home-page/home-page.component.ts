import { Component, ViewChild } from '@angular/core';

import { SummPageComponent } from '../summ-page/summ-page.component';
import { MenuPageComponent } from '../menu-page/menu-page.component';
import { HomeMenuService } from '../home-menu.service';

@Component({
  selector: 'ons-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

	contentPage = SummPageComponent;
	sidePage = MenuPageComponent;

	@ViewChild('splitter') splitter;
	constructor(private homemenuService: HomeMenuService) {
    	this.homemenuService.menu$.subscribe(() => this.splitter.nativeElement.side.open());
	}


}
