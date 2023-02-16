import { TestBed } from '@angular/core/testing';

import { RegisterHttp } from './register.http';

describe('RegisterHttp', () => {
  let service: RegisterHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
