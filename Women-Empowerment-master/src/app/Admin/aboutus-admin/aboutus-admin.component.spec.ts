import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusAdminComponent } from './aboutus-admin.component';

describe('AboutusAdminComponent', () => {
  let component: AboutusAdminComponent;
  let fixture: ComponentFixture<AboutusAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
