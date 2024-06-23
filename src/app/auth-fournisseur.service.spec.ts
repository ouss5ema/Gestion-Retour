/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthFournisseurService } from './auth-fournisseur.service';

describe('Service: AuthFournisseur', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthFournisseurService]
    });
  });

  it('should ...', inject([AuthFournisseurService], (service: AuthFournisseurService) => {
    expect(service).toBeTruthy();
  }));
});
