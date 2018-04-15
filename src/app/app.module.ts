import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OfferSlotsManagementComponent } from './offer-slots-management/offer-slots-management.component';

//My addition
import { FormsModule } from '@angular/forms';
import { OfferSlotDetailsComponent } from './offer-slot-details/offer-slot-details.component';
import { OfferSlotManagementService } from './offer-slot-management.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    OfferSlotsManagementComponent,
    OfferSlotDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [OfferSlotManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
