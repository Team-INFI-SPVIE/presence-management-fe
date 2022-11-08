import { TestBed } from '@angular/core/testing';

import { CrudMatterService } from './crud-matter.service';

describe('CrudMatterService', () => {
  let service: CrudMatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudMatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
