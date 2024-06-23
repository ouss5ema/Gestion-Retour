import { AuthFournisseurService } from 'app/auth-fournisseur.service';
import { Injectable } from '@angular/core';
import { Article } from './layouts/admin-layout/Models/Article';
import { FournisseurService } from './Fournisseur.service';

@Injectable({
  providedIn: 'root'
})
export class OpenTicketService {
  private tickets: Article[] = [];
  private ticketId = 1;
constructor(private fournisseurService: FournisseurService,private AuthFournisseurService:AuthFournisseurService) { }
addTicket(ticket: Article) {
  ticket.id = this.ticketId++;  // Attribuez l'ID actuel au ticket
  ticket.fournisseur = this.fournisseurService.getFournisseurByRef(ticket.reference); // Attribuez le fournisseur basé sur la référence de l'article
  this.tickets.push(ticket);
  console.log("ticket", ticket);
}

getTickets(): Article[] {
  return this.tickets;
}
getTicketById(id: number): Article {
  return this.tickets.find(ticket => ticket.id === id);
  
}
assignTicketToSupplier(ticket: Article) {
  // Logic to assign a ticket to a supplier based on article reference
  ticket.fournisseur = this.fournisseurService.getFournisseurByRef(ticket.reference);
}
getTicketsByFournisseur(fournisseurId: number): Article[] {
  return this.tickets.filter(ticket => ticket.fournisseur?.id === fournisseurId);
}
// ticket.service.ts

getTicketsForCurrentFournisseur(): Article[] {
  const fournisseurName = this.AuthFournisseurService.getCurrentFournisseurName();
  console.log("Fournisseur actuel", fournisseurName); 
  if (fournisseurName) {
    return this.tickets.filter(ticket => ticket.fournisseur?.nom === fournisseurName);
  }
  return [];
}
// initializeTestTickets() {
//   this.tickets.push(new Article({
//     id: 1,
//     fournisseur: { id: 2, nom: '', email: 'simop@test.com', motDePasse: 'test123' },
//     nomArticle: 'Art1',
//     reference: 'SIM001',
    
//     // ...autres propriétés
//   }));
//   // Ajouter d'autres tickets de test ici si nécessaire
// }



}
