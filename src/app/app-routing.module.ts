import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferSlotDetailsComponent } from './offer-slot-details/offer-slot-details.component';
import { OfferSlotsManagementComponent } from './offer-slots-management/offer-slots-management.component';
  /* Removed commonModule - a best practice components are not declared
import { CommonModule } from '@angular/common';
*/

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 // { path: 'dashboard', component: DashboardComponent },
  { path: 'offerslotdetail/:id', component: OfferSlotDetailsComponent },
  { path: 'authenticatedAccessAngular.htm', component: OfferSlotsManagementComponent }
];
@NgModule({
  /* Removed commonModule - a best practice components are not declared*/
  imports: [   
    /*CommonModule */
    RouterModule.forRoot(routes)
  ],
  
  exports:[RouterModule]
  /* removed declarations from Router Module,a best practice components are not declared in Router
  declarations: []
  */
})
export class AppRoutingModule { }
