import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceentryPage } from './serviceentry.page';

describe('ServiceentryPage', () => {
  let component: ServiceentryPage;
  let fixture: ComponentFixture<ServiceentryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceentryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
