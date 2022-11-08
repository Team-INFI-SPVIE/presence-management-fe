import { TestBed } from '@angular/core/testing';

import { CrudProfessorService } from './crud-professor.service';

describe('CrudProfessorService', () => {
  let service: CrudProfessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudProfessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
