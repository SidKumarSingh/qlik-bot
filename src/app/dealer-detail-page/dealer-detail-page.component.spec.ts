import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerDetailPageComponent } from './dealer-detail-page.component';

describe('DealerDetailPageComponent', () => {
  let component: DealerDetailPageComponent;
  let fixture: ComponentFixture<DealerDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
