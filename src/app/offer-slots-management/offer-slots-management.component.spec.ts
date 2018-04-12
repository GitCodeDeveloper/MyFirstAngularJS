import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSlotsManagementComponent } from './offer-slots-management.component';

describe('OfferSlotsManagementComponent', () => {
  let component: OfferSlotsManagementComponent;
  let fixture: ComponentFixture<OfferSlotsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferSlotsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferSlotsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
