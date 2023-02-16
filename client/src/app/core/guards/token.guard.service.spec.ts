import { TestBed } from '@angular/core/testing';

import { Token.GuardService } from './token.guard.service';

describe('Token.GuardService', () => {
  let service: Token.GuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Token.GuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
