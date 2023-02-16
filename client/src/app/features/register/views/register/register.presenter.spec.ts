import { TestBed } from '@angular/core/testing';

import { RegisterPresenter } from './register.presenter';

describe('RegisterPresenter', () => {
  let service: RegisterPresenter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterPresenter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
