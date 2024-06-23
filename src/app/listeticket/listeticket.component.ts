import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageShareService } from 'app/image-share.service';
import { Article } from 'app/layouts/admin-layout/Models/Article';
import { OpenTicketService } from 'app/open-ticket.service';
@Component({
  selector: 'app-listeticket',
  templateUrl: './listeticket.component.html',
  styleUrls: ['./listeticket.component.scss']
})
export class ListeticketComponent implements OnInit {
  tickets: Article[] = [];
  images: string[] = [];
  selectedTicket: Article | null = null;
  showPopup: boolean = false;
  constructor(private ticketService:OpenTicketService,private imageShareService: ImageShareService,private router: Router) { }

  ngOnInit() {
    this.images = this.imageShareService.getImages();
    this.loadTickets();
  }
  loadTickets(): void {
    this.tickets = this.ticketService.getTickets();
    this.tickets.forEach(ticket => {
      // Si la date de création n'est pas déjà définie, ajoutez-la
      if (!ticket.dateCreation) {
        ticket.dateCreation = new Date(); // ou une autre logique pour définir la date de création
      }
      console.log('Tickets:', this.tickets);
    });
  }
  openStatusPopup(ticket: Article) {
    this.selectedTicket = ticket;
    // Ici vous pouvez aussi initialiser la valeur de la barre de progression en fonction du statut du ticket
  }
  showStatusPopup(ticket: Article): void {
    this.selectedTicket = ticket;
    this.showPopup = true;
  }
  voirTicket(ticketId: number) : void{
    this.router.navigate(['/voirticket', ticketId]);
  }
  // showStatusPopup(ticket: Article) {
  //   const modalRef = this.modalService.open(TicketStatusPopupComponent, { size: 'lg' });
  //   modalRef.componentInstance.ticket = ticket; // Passez le ticket au composant de popup
  // }

}
