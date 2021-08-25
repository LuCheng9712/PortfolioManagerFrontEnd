import { TestBed } from '@angular/core/testing';

import { CashaccService } from './cashacc.service';

describe('CashaccService', () => {
  let service: CashaccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashaccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
