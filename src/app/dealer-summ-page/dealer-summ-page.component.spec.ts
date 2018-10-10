import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerSummPageComponent } from './dealer-summ-page.component';

describe('DealerSummPageComponent', () => {
  let component: DealerSummPageComponent;
  let fixture: ComponentFixture<DealerSummPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerSummPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerSummPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
