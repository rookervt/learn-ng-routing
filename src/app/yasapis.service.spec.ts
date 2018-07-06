import { TestBed, inject } from '@angular/core/testing';

import { YasapisService } from './yasapis.service';

describe('YasapisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YasapisService]
    });
  });

  it('should be created', inject([YasapisService], (service: YasapisService) => {
    expect(service).toBeTruthy();
  }));
});
