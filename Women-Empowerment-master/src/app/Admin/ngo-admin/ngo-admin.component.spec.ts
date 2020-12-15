import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoAdminComponent } from './ngo-admin.component';

describe('NgoAdminComponent', () => {
  let component: NgoAdminComponent;
  let fixture: ComponentFixture<NgoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
