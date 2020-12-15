import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqNGOComponent } from './faq-ngo.component';

describe('FaqNGOComponent', () => {
  let component: FaqNGOComponent;
  let fixture: ComponentFixture<FaqNGOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqNGOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqNGOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
