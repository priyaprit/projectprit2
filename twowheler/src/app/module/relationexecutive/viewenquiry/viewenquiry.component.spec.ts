import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewenquiryComponent } from './viewenquiry.component';

describe('ViewenquiryComponent', () => {
  let component: ViewenquiryComponent;
  let fixture: ComponentFixture<ViewenquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewenquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
