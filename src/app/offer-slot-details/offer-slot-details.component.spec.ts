import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSlotDetailsComponent } from './offer-slot-details.component';

describe('OfferSlotDetailsComponent', () => {
  let component: OfferSlotDetailsComponent;
  let fixture: ComponentFixture<OfferSlotDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferSlotDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferSlotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
