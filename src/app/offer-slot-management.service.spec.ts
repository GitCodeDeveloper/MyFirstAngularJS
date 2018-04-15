import { TestBed, inject } from '@angular/core/testing';

import { OfferSlotManagementService } from './offer-slot-management.service';

describe('OfferSlotManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfferSlotManagementService]
    });
  });

  it('should be created', inject([OfferSlotManagementService], (service: OfferSlotManagementService) => {
    expect(service).toBeTruthy();
  }));
});
