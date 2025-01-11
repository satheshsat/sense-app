import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { homeGuard } from './home.guard';

describe('homeGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => homeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
