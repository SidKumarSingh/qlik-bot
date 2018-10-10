import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerSalesPageComponent } from './dealer-sales-page.component';

describe('DealerSalesPageComponent', () => {
  let component: DealerSalesPageComponent;
  let fixture: ComponentFixture<DealerSalesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerSalesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerSalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
