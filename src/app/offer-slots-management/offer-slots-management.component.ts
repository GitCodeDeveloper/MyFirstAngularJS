import { Component, OnInit } from '@angular/core';
import { OfferSlot} from '../offerslot';
import { OfferSlots} from '../offerslot';
import { OFFERSLOTS} from '../TestData/mockofferdata';

@Component({
  selector: 'app-offer-slots-management',
  templateUrl: './offer-slots-management.component.html',
  styleUrls: ['./offer-slots-management.component.css']
})
export class OfferSlotsManagementComponent implements OnInit {

 /* offerSlot:OfferSlot ={
    slotNumber : 10,
    aprimoId : 197714,
    controlcontentId : 'CTRLCNT14001'
  };*/
  offerSlots = OFFERSLOTS;

  constructor() { }

  ngOnInit() {
  }

}
