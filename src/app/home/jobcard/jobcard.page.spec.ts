import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobcardPage } from './jobcard.page';

describe('JobcardPage', () => {
  let component: JobcardPage;
  let fixture: ComponentFixture<JobcardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JobcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
