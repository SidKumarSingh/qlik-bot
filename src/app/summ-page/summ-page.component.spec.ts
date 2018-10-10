import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummPageComponent } from './summ-page.component';

describe('SummPageComponent', () => {
  let component: SummPageComponent;
  let fixture: ComponentFixture<SummPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
