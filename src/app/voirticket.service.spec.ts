/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VoirticketService } from './voirticket.service';

describe('Service: Voirticket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoirticketService]
    });
  });

  it('should ...', inject([VoirticketService], (service: VoirticketService) => {
    expect(service).toBeTruthy();
  }));
});
