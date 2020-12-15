import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqStepComponent } from './faq-step.component';

describe('FaqStepComponent', () => {
  let component: FaqStepComponent;
  let fixture: ComponentFixture<FaqStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
