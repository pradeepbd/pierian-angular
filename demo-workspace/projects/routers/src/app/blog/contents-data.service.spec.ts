import { TestBed } from '@angular/core/testing';

import { ContentsDataService } from './contents-data.service';

describe('ContentsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentsDataService = TestBed.get(ContentsDataService);
    expect(service).toBeTruthy();
  });
});
