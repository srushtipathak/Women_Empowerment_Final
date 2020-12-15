import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationNGOComponent } from './registration-ngo.component';

describe('RegistrationNGOComponent', () => {
  let component: RegistrationNGOComponent;
  let fixture: ComponentFixture<RegistrationNGOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationNGOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationNGOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
