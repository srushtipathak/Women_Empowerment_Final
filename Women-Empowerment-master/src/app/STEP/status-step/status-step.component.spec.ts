import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusStepComponent } from './status-step.component';

describe('StatusStepComponent', () => {
  let component: StatusStepComponent;
  let fixture: ComponentFixture<StatusStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
