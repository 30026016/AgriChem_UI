import { TestBed } from '@angular/core/testing';

import { ContractmanagerService } from './contractmanager.service';

describe('ContractmanagerService', () => {
  let service: ContractmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
