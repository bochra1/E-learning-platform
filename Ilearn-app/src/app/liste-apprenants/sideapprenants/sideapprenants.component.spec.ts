import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideapprenantsComponent } from './sideapprenants.component';

describe('SideapprenantsComponent', () => {
  let component: SideapprenantsComponent;
  let fixture: ComponentFixture<SideapprenantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideapprenantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideapprenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
