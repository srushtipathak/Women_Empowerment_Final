import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukanyaComponent } from './sukanya.component';

describe('SukanyaComponent', () => {
  let component: SukanyaComponent;
  let fixture: ComponentFixture<SukanyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SukanyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SukanyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
