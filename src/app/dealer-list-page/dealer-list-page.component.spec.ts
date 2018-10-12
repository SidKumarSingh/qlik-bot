import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerListPageComponent } from './dealer-list-page.component';

describe('DealerListPageComponent', () => {
  let component: DealerListPageComponent;
  let fixture: ComponentFixture<DealerListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
