import { TestBed } from '@angular/core/testing';

import { DeviceFirebaseService } from './device-firebase.service';

describe('DeviceFirebaseService', () => {
  let service: DeviceFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
