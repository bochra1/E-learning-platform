import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavapprenantsComponent } from './navapprenants.component';

describe('NavapprenantsComponent', () => {
  let component: NavapprenantsComponent;
  let fixture: ComponentFixture<NavapprenantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavapprenantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavapprenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
