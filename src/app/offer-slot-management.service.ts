import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { OfferSlot } from './offerslot';
import { OFFERSLOTS } from './TestData/mockofferdata';

@Injectable()
export class OfferSlotManagementService {

  constructor() { }

  getCurrentOfferSlots():Observable<OfferSlot[]>{
    return of(OFFERSLOTS);
  }
}
