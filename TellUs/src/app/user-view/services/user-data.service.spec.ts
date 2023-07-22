import { TestBed } from '@angular/core/testing';

import { GetUserDataService } from './user-data.service';

describe('GetUserDataService', () => {
  let service: GetUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
