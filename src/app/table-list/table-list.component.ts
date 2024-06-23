import { Router } from '@angular/router';
import { ClientService } from 'app/layouts/admin-layout/Service/Client';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Client } from 'app/layouts/admin-layout/Models/Client';
import { UserProfileService } from 'app/UserProfile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  
})
export class TableListComponent implements OnInit, AfterViewInit {
 
  clients: Client[];
  dataSource = new MatTableDataSource<Client>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

 

  clientForm: FormGroup;
  
  constructor(private clientServ:ClientService,private userp:UserProfileService,private router: Router){}
  ngAfterViewInit(): void {
    // Assigner le paginateur à la source de données une fois que la vue est initialisée
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.clientServ.clientsUpdated.subscribe(updated => {
      if (updated) {
        this.loadClients();
        // Réinitialiser le BehaviorSubject après que la mise à jour a été traitée
        this.clientServ.clientsUpdated.next(false);
      }
    });
    // Chargez initialement la liste des clients
    this.loadClients();
  }
  loadClients(): void {
    this.clients = this.clientServ.getClients();
}

onDeleteClient(clientId: number): void {
    this.clientServ.supprimerClient(clientId);
    this.loadClients(); // Recharger la liste après la suppression
}
  onCloseClient(client: Client): void {
    // Stocker les données du client sélectionné dans le service UserProfileService
    this.userp.setUserData({ nom: client.nom, prenom: client.prenom });
    // Rediriger vers le composant openticket
    this.router.navigate(['/openticket']);
  }
  
  
  onAddClient(): void {
   this.router.navigate(['/user-profile']);
  }
  onEditClient(client: Client): void {
    this.userp.setUserData(client);
    this.clientServ.modifierClient(client);
    this.loadClients(); // Assurez-vous que cette méthode rafraîchit la liste des clients
    this.router.navigate(['/user-profile', client.id]);
  }
 
  

}
