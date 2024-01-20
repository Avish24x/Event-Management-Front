import { TestBed } from '@angular/core/testing';

import { CommunicationDataService } from './communication-data.service';

describe('CommunicationDataService', () => {
  let service: CommunicationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
