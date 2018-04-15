import { Component, OnInit } from '@angular/core';
import { OfferSlot} from '../offerslot';
import { OfferSlots} from '../offerslot';
import { OfferSlotManagementService } from '../offer-slot-management.service';

@Component({
  selector: 'app-offer-slots-management',
  templateUrl: './offer-slots-management.component.html',
  styleUrls: ['./offer-slots-management.component.css']
})
export class OfferSlotsManagementComponent implements OnInit {

 
  offerSlots :OfferSlot[];
  selectedOffer:OfferSlot;

  constructor(private offerManagementService:OfferSlotManagementService) { 

  }

  initCurrentOfferSlots():void {
    this.offerManagementService.getCurrentOfferSlots().subscribe(offerSlots => this.offerSlots = offerSlots)
  }

  ngOnInit() {
    this.initCurrentOfferSlots();
  }

  onOfferSlect(selectedOffer:OfferSlot):void{
    this.selectedOffer = selectedOffer;
  }

}
