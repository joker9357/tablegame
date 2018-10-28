import { TestBed } from '@angular/core/testing';

import { Connect4Service } from './connect-4.service';

describe('Connect4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Connect4Service = TestBed.get(Connect4Service);
    expect(service).toBeTruthy();
  });
});
