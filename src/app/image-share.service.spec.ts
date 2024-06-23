/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImageShareService } from './image-share.service';

describe('Service: ImageShare', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageShareService]
    });
  });

  it('should ...', inject([ImageShareService], (service: ImageShareService) => {
    expect(service).toBeTruthy();
  }));
});
