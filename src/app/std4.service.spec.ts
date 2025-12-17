import { TestBed } from '@angular/core/testing';

import { Std4Service } from './std4.service';

describe('Std4Service', () => {
  let service: Std4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Std4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
