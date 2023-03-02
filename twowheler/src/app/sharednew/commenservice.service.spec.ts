import { TestBed } from '@angular/core/testing';

import { CommenserviceService } from './commenservice.service';

describe('CommenserviceService', () => {
  let service: CommenserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommenserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
