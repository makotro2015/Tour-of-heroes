import { TestBed } from '@angular/core/testing';

import { CommonTableLogicService } from './common-table-logic.service';

describe('CommonTableLogicService', () => {
  let service: CommonTableLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonTableLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
