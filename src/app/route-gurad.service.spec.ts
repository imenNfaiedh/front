import { TestBed } from '@angular/core/testing';

import { RouteGuradService } from './route-gurad.service';

describe('RouteGuradService', () => {
  let service: RouteGuradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
