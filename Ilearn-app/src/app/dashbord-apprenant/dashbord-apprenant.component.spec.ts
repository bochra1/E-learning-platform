import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordApprenantComponent } from './dashbord-apprenant.component';

describe('DashbordApprenantComponent', () => {
  let component: DashbordApprenantComponent;
  let fixture: ComponentFixture<DashbordApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
