import { TestBed } from '@angular/core/testing';

import { DeviceNotificationService } from './device-notification.service';

describe('DeviceNotificationService', () => {
  let service: DeviceNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
