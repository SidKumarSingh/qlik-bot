import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerOutsPageComponent } from './dealer-outs-page.component';

describe('DealerOutsPageComponent', () => {
  let component: DealerOutsPageComponent;
  let fixture: ComponentFixture<DealerOutsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerOutsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerOutsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
