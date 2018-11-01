import { TestBed } from '@angular/core/testing';

import { DraughtsService } from './draughts.service';

describe('DraughtsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DraughtsService = TestBed.get(DraughtsService);
    expect(service).toBeTruthy();
  });
});
