import { TestBed } from '@angular/core/testing';

import { Std2Service } from './std2.service';

describe('Std2Service', () => {
  let service: Std2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Std2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
