import { TestBed } from '@angular/core/testing';

import { CustRegService } from './cust-reg.service';

describe('CustRegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustRegService = TestBed.get(CustRegService);
    expect(service).toBeTruthy();
  });
});
