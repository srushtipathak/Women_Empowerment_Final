import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoChoiceComponent } from './ngo-choice.component';

describe('NgoChoiceComponent', () => {
  let component: NgoChoiceComponent;
  let fixture: ComponentFixture<NgoChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
