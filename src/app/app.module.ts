import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OfferSlotsManagementComponent } from './offer-slots-management/offer-slots-management.component';

//My addition
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OfferSlotsManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
