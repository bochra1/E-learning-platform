import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarlisteComponent } from './sidebarliste.component';

describe('SidebarlisteComponent', () => {
  let component: SidebarlisteComponent;
  let fixture: ComponentFixture<SidebarlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarlisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
