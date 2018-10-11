import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerActPageComponent } from './dealer-act-page.component';

describe('DealerActPageComponent', () => {
  let component: DealerActPageComponent;
  let fixture: ComponentFixture<DealerActPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerActPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerActPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
