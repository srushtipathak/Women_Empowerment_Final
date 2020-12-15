import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoComponent } from './ngo.component';

describe('NgoComponent', () => {
  let component: NgoComponent;
  let fixture: ComponentFixture<NgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
