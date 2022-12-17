import { TestBed } from '@angular/core/testing';

import { CasaEditorialService } from './casa-editorial.service';

describe('CasaEditorialService', () => {
  let service: CasaEditorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasaEditorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
