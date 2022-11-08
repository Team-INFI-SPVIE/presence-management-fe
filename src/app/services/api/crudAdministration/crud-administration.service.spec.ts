import { TestBed } from '@angular/core/testing';

import { CrudAdministrationService } from './crud-administration.service';

describe('CrudAdministrationService', () => {
  let service: CrudAdministrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudAdministrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
