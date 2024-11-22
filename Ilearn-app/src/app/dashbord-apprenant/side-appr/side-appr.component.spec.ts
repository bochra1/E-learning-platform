import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideApprComponent } from './side-appr.component';

describe('SideApprComponent', () => {
  let component: SideApprComponent;
  let fixture: ComponentFixture<SideApprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideApprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideApprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
