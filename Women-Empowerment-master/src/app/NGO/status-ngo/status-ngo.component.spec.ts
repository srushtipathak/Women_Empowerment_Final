import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusNGOComponent } from './status-ngo.component';

describe('StatusNGOComponent', () => {
  let component: StatusNGOComponent;
  let fixture: ComponentFixture<StatusNGOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusNGOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusNGOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
