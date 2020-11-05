import { TestBed } from '@angular/core/testing';

import { AgriApplicationService } from './agri-application.service';

describe('AgriApplicationService', () => {
  let service: AgriApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgriApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
