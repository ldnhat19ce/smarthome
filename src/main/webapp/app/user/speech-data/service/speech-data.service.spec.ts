import { TestBed } from '@angular/core/testing';

import { SpeechDataService } from './speech-data.service';

describe('SpeechDataService', () => {
  let service: SpeechDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
