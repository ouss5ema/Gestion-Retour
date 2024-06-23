// data-sharing.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from './layouts/admin-layout/Models/Client';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  setClient(client: Client) {
    throw new Error('Method not implemented.');
  }
  private clientsSource = new BehaviorSubject<Client[]>([]);
  currentClients = this.clientsSource.asObservable();

  constructor() { }

  addClient(client: Client): void {
    const clients = this.clientsSource.value;
    clients.push(client);
    this.clientsSource.next(clients);
  }
}
