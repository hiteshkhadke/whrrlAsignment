import { TestBed } from '@angular/core/testing';

import { InfoserviceService } from './infoservice.service';

describe('InfoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoserviceService = TestBed.get(InfoserviceService);
    expect(service).toBeTruthy();
  });
});
