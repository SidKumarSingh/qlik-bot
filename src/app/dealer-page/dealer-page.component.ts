import { Component } from '@angular/core';

import { DealerActPageComponent } from '../dealer-act-page/dealer-act-page.component';
import { DealerSalesPageComponent } from '../dealer-sales-page/dealer-sales-page.component';
import { DealerOutsPageComponent } from '../dealer-outs-page/dealer-outs-page.component';
import { DealerIncPageComponent } from '../dealer-inc-page/dealer-inc-page.component';

@Component({
  selector: 'ons-page',
  templateUrl: './dealer-page.component.html',
  styleUrls: ['./dealer-page.component.css']
})
export class DealerPageComponent {

	tab1 = DealerActPageComponent;
	tab2 = DealerSalesPageComponent;
	tab3 = DealerOutsPageComponent;
	tab4 = DealerIncPageComponent;

}
