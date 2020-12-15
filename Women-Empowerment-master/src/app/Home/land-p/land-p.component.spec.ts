import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPComponent } from './land-p.component';

describe('LandPComponent', () => {
  let component: LandPComponent;
  let fixture: ComponentFixture<LandPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
