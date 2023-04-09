import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceNotificationComponent } from './device-notification.component';

describe('DeviceNotificationComponent', () => {
  let component: DeviceNotificationComponent;
  let fixture: ComponentFixture<DeviceNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviceNotificationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
