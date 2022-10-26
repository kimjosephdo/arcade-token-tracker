import { TestBed } from '@angular/core/testing';

import { GameTokenService } from './game-token.service';

describe('GameTokenService', () => {
  let service: GameTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
