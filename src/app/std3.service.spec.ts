import { TestBed } from '@angular/core/testing';

import { Std3Service } from './std3.service';

describe('Std3Service', () => {
  let service: Std3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Std3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
