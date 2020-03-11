import { TestBed } from '@angular/core/testing';

import { BackendCallService } from './backend-call.service';

describe('BackendCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendCallService = TestBed.get(BackendCallService);
    expect(service).toBeTruthy();
  });
});
