/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserProfileService } from './UserProfile.service';

describe('Service: UserProfile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfileService]
    });
  });

  it('should ...', inject([UserProfileService], (service: UserProfileService) => {
    expect(service).toBeTruthy();
  }));
});
