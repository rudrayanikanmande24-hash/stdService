import { TestBed } from '@angular/core/testing';

import { Std5Service } from './std5.service';

describe('Std5Service', () => {
  let service: Std5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Std5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
