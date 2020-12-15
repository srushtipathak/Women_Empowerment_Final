import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingnormsComponent } from './fundingnorms.component';

describe('FundingnormsComponent', () => {
  let component: FundingnormsComponent;
  let fixture: ComponentFixture<FundingnormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundingnormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingnormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
