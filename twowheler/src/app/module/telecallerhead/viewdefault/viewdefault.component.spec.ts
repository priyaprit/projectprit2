import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdefaultComponent } from './viewdefault.component';

describe('ViewdefaultComponent', () => {
  let component: ViewdefaultComponent;
  let fixture: ComponentFixture<ViewdefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
