import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStepComponent } from './registration-step.component';

describe('RegistrationStepComponent', () => {
  let component: RegistrationStepComponent;
  let fixture: ComponentFixture<RegistrationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
