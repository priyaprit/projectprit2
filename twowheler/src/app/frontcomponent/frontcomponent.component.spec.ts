import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontcomponentComponent } from './frontcomponent.component';

describe('FrontcomponentComponent', () => {
  let component: FrontcomponentComponent;
  let fixture: ComponentFixture<FrontcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
