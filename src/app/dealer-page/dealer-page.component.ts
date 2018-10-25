import { Component, ViewChild } from '@angular/core';

import { DealerActPageComponent } from '../dealer-act-page/dealer-act-page.component';
import { DealerSalesPageComponent } from '../dealer-sales-page/dealer-sales-page.component';
import { DealerOutsPageComponent } from '../dealer-outs-page/dealer-outs-page.component';
import { DealerIncPageComponent } from '../dealer-inc-page/dealer-inc-page.component';
import { MenuPageComponent } from '../menu-page/menu-page.component';
import { HomeMenuService } from '../home-menu.service';

@Component({
  selector: 'ons-page',
  templateUrl: './dealer-page.component.html',
  styleUrls: ['./dealer-page.component.css']
})
export class DealerPageComponent {

	contentPage = DealerActPageComponent;
	sidePage = MenuPageComponent;

	@ViewChild('splitter') splitter;

	tab1 = DealerActPageComponent;
	tab2 = DealerSalesPageComponent;
	tab3 = DealerOutsPageComponent;
	tab4 = DealerIncPageComponent;

	constructor(private homemenuService: HomeMenuService) {
    	this.homemenuService.menu$.subscribe(() => this.splitter.nativeElement.side.open());
	}

}
