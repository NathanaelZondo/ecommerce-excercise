import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricerangefilterComponent } from './pricerangefilter.component';

describe('PricerangefilterComponent', () => {
  let component: PricerangefilterComponent;
  let fixture: ComponentFixture<PricerangefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricerangefilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricerangefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
