import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoStepComponent } from './ngo-step.component';

describe('NgoStepComponent', () => {
  let component: NgoStepComponent;
  let fixture: ComponentFixture<NgoStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
