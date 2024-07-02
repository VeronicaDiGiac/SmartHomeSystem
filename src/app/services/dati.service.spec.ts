import { TestBed } from '@angular/core/testing';

import { datiService } from './dati.service';

describe('datiService', () => {
  let service: datiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(datiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
