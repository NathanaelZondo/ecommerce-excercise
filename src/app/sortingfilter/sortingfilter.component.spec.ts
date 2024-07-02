import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingfilterComponent } from './sortingfilter.component';

describe('SortingfilterComponent', () => {
  let component: SortingfilterComponent;
  let fixture: ComponentFixture<SortingfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortingfilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SortingfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
