/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OpenTicketService } from './open-ticket.service';

describe('Service: OpenTicket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenTicketService]
    });
  });

  it('should ...', inject([OpenTicketService], (service: OpenTicketService) => {
    expect(service).toBeTruthy();
  }));
});
