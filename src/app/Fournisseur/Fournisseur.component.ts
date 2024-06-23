import { Component, OnInit ,OnDestroy } from '@angular/core';
import { AuthFournisseurService } from 'app/auth-fournisseur.service';
import { FournisseurService } from 'app/Fournisseur.service';
import { Article } from 'app/layouts/admin-layout/Models/Article';
import { OpenTicketService } from 'app/open-ticket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-Fournisseur',
  templateUrl: './Fournisseur.component.html',
  styleUrls: ['./Fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {
  tickets: Article[] = [];
  private fournisseurSub: Subscription;
  
  constructor(
    private authFournisseurService: AuthFournisseurService,
    private fournisseurService: FournisseurService,
    private opentickets:OpenTicketService
  ) { }

  ngOnInit() {
    // 
    this.loadTicketsForFournisseur();
    }
  loadTicketsForFournisseur() {
    this.tickets = this.opentickets.getTicketsForCurrentFournisseur();
    console.log(this.tickets);
  }
//   const fournisseur = this.authService.getCurrentFournisseur();
//   if (fournisseur) {
//     this.tickets = this.ticketService.getTicketsByFournisseur(fournisseur.id);
//   }
// }
  }


