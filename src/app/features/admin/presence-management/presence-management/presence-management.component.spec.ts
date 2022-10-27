import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceManagementComponent } from './presence-management.component';

describe('PresenceManagementComponent', () => {
  let component: PresenceManagementComponent;
  let fixture: ComponentFixture<PresenceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenceManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
