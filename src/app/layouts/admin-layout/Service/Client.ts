// client.service.ts
import { Injectable } from '@angular/core';
import { Client } from '../Models/Client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public clients: Client[] = [
    { id: 1, nom: 'oussema', prenom: 'Aoun', telephone: '56400096', email: 'oussema@example.com'},
    { id: 2, nom: 'karim', prenom: 'maitig', telephone: '2', email: 'karim@example.com'},
    { id: 3, nom: 'asma', prenom: 'bouzid', telephone: '3', email: 'asma@example.com'},
    { id: 4, nom: 'chadha', prenom: 'lajmi', telephone: '4', email: 'chadha@example.com'},
    { id: 5, nom: 'iheb', prenom: 'ellouze', telephone: '5', email: 'iheb@example.com'},
    // { id: 2, nom: 'Jane', prenom: 'Doe', telephone: '987654321', email: 'jane@example.com' },
    // { id: 3, nom: 'Alice', prenom: 'Smith', telephone: '555666777', email: 'alice@example.com' },
    // Ajoutez d'autres clients si nécessaire
  ];
  private clientIdCounter: number = this.clients.length > 0 ? Math.max(...this.clients.map(client => client.id)) + 1 : 1;
  private currentClient: Client | null = null;
  public clientsUpdated = new BehaviorSubject<boolean>(false);
  constructor() { }
  notifyClientsUpdated(): void {
    this.clientsUpdated.next(true);
  }
  
  modifierClient(clientUpdated: Client): void {
    const index = this.clients.findIndex(client => client.id === clientUpdated.id);
    if (index !== -1) {
      this.clients[index] = { ...clientUpdated };
      console.log('Client mis à jour:', clientUpdated);
      // Notifiez que les clients ont été mis à jour
      this.clientsUpdated.next(true);
    }
  }
  
login(email: string): Client | null {
  const client = this.clients.find(c => c.email === email);
  if (client) {
    this.currentClient = client;
    return client;
  }
  return null;
}
//  isEmploye(): boolean {
//     return this.currentClient !== null && this.currentClient.role === 'employé';
//   }

  

  // Méthode pour ajouter un nouveau client
  ajouterClient(client: Client): void {
    client.id = this.clientIdCounter++; // Assurez-vous que chaque ID est unique
    this.clients.push(client);
    console.log('Client ajouté:', client);
    this.clientsUpdated.next(true);
  }
  supprimerClient(id: number): void {
    this.clients = this.clients.filter(client => client.id !== id);
    console.log('Client supprimé:', id);
    this.clientsUpdated.next(true);
}
  getClients(): Client[] {
    return this.clients;
  }
}
