import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineesAdminComponent } from './trainees-admin.component';

describe('TraineesAdminComponent', () => {
  let component: TraineesAdminComponent;
  let fixture: ComponentFixture<TraineesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
