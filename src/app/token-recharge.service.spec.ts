import { TestBed } from '@angular/core/testing';

import { TokenRechargeService } from './token-recharge.service';

describe('TokenRechargeService', () => {
  let service: TokenRechargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenRechargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
