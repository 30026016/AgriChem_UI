import { TestBed } from '@angular/core/testing';

import { AgrichemicalService } from './agrichemical.service';

describe('AgrichemicalService', () => {
  let service: AgrichemicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgrichemicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
