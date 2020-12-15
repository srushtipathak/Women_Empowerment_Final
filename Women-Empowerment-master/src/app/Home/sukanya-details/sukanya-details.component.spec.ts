import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukanyaDetailsComponent } from './sukanya-details.component';

describe('SukanyaDetailsComponent', () => {
  let component: SukanyaDetailsComponent;
  let fixture: ComponentFixture<SukanyaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SukanyaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SukanyaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
