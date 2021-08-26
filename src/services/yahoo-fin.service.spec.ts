import { TestBed } from '@angular/core/testing';

import { YahooFinService } from './yahoo-fin.service';

describe('YahooFinService', () => {
  let service: YahooFinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YahooFinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
