import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardChildService } from './auth-guard-child.service';

describe('AuthGuardChildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardChildService]
    });
  });

  it('should be created', inject([AuthGuardChildService], (service: AuthGuardChildService) => {
    expect(service).toBeTruthy();
  }));
});
