import { Component, OnInit, Input } from '@angular/core';
import { OfferSlot } from '../offerslot';


@Component({
  selector: 'app-offer-slot-details',
  templateUrl: './offer-slot-details.component.html',
  styleUrls: ['./offer-slot-details.component.css']
})
export class OfferSlotDetailsComponent implements OnInit {

  @Input() offerSlot:OfferSlot;

  constructor() { }

  ngOnInit() {
  }

}
