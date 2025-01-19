import { TestBed } from '@angular/core/testing';

import { NgDriverService } from './ng-driver.service';

describe('NgDriverService', () => {
  let service: NgDriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
