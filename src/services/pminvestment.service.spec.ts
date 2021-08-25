import { TestBed } from '@angular/core/testing';

import { PMInvestmentService } from './pminvestment.service';

describe('PminvestmentService', () => {
  let service: PMInvestmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PMInvestmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
