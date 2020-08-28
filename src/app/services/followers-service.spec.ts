import { TestBed } from '@angular/core/testing';

import { FollowersService } from './followers-service';

describe('FollowersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowersService = TestBed.get(FollowersService);
    expect(service).toBeTruthy();
  });
});
