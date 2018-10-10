import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerIncPageComponent } from './dealer-inc-page.component';

describe('DealerIncPageComponent', () => {
  let component: DealerIncPageComponent;
  let fixture: ComponentFixture<DealerIncPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerIncPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerIncPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
