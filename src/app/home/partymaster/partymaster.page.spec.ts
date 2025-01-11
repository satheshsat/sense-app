import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartymasterPage } from './partymaster.page';

describe('PartymasterPage', () => {
  let component: PartymasterPage;
  let fixture: ComponentFixture<PartymasterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PartymasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
