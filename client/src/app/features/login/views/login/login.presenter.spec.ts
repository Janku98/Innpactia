import { TestBed } from '@angular/core/testing';

import { LoginPresenter } from './login.presenter';

describe('LoginPresenter', () => {
  let service: LoginPresenter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginPresenter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
