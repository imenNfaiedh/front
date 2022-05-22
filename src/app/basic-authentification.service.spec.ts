import { TestBed } from '@angular/core/testing';

import { BasicAuthentificationService } from './basic-authentification.service';

describe('BasicAuthentificationService', () => {
  let service: BasicAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
