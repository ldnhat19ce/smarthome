import { TestBed } from '@angular/core/testing';

import { DeviceMonitorService } from './device-monitor.service';

describe('DeviceMonitorService', () => {
  let service: DeviceMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
