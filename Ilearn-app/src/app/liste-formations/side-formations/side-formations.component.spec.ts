import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFormationsComponent } from './side-formations.component';

describe('SideFormationsComponent', () => {
  let component: SideFormationsComponent;
  let fixture: ComponentFixture<SideFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideFormationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
