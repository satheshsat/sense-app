import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdjustmentPage } from './adjustment.page';

describe('AdjustmentPage', () => {
  let component: AdjustmentPage;
  let fixture: ComponentFixture<AdjustmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
