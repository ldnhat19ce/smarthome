import { TestBed } from '@angular/core/testing';

import { DeviceTimerService } from './device-timer.service';

describe('DeviceTimerService', () => {
  let service: DeviceTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
