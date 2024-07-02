import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryfilterComponent } from './categoryfilter.component';

describe('CategoryfilterComponent', () => {
  let component: CategoryfilterComponent;
  let fixture: ComponentFixture<CategoryfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryfilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
