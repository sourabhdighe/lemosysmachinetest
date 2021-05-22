import { TestBed } from '@angular/core/testing';

import { DatamainupulateService } from './datamainupulate.service';

describe('DatamainupulateService', () => {
  let service: DatamainupulateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamainupulateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
