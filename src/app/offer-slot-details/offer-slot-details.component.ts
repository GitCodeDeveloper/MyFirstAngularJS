import { Component, OnInit, Input } from '@angular/core';
import { OfferSlot } from '../offerslot';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OfferSlotManagementService } from '../offer-slot-management.service';



@Component({
  selector: 'app-offer-slot-details',
  templateUrl: './offer-slot-details.component.html',
  styleUrls: ['./offer-slot-details.component.css']
})
export class OfferSlotDetailsComponent implements OnInit {

  @Input() offerSlot:OfferSlot;

  constructor(
    private route:ActivatedRoute,
    private offerSlotManagementService:OfferSlotManagementService,
    private location:Location
  ) { }

  ngOnInit() {
    this.getOfferFromRoute();
  }
  getOfferFromRoute():void{
    const slotNumber = +this.route.snapshot.paramMap.get('id');
    this.offerSlotManagementService.getOfferSlot(slotNumber).subscribe(hero =>this.offerSlot = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
