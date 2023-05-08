import { TestBed } from '@angular/core/testing';

import { ServiciosPortfolioService } from './servicios-portfolio.service';

describe('ServiciosPortfolioService', () => {
  let service: ServiciosPortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosPortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
