import { TestBed } from '@angular/core/testing';

import { LoginHttp } from './login.http';

describe('LoginHttp', () => {
  let service: LoginHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
