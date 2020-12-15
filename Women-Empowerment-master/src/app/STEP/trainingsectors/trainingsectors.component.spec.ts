import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsectorsComponent } from './trainingsectors.component';

describe('TrainingsectorsComponent', () => {
  let component: TrainingsectorsComponent;
  let fixture: ComponentFixture<TrainingsectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
