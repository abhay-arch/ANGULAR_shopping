import { TestBed } from '@angular/core/testing';

import { BuyerManagementService } from './buyer-management.service';

describe('BuyerManagementService', () => {
  let service: BuyerManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
