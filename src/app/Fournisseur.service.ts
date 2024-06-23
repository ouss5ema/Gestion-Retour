import { Injectable } from '@angular/core';
import { Fournisseur } from './layouts/admin-layout/Models/Fournisseur';
import { Article } from './layouts/admin-layout/Models/Article';

// fournisseur.service.ts
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  fournisseurs: Fournisseur[] = [
    { id: 1, nom: 'El Athir',email:'elathir@test.com',motDePasse:'test123' },
    { id: 2, nom: 'SIMOP',email:'simop@test.com',motDePasse:'test123' },
    { id: 3, nom: 'MIPS',email:'mips@test.com',motDePasse:'test123' },
    { id: 4, nom: 'BRIDGE',email:'bridge@test.com',motDePasse:'test123' },
    { id: 5, nom: 'SAMSUNG',email:'samsung@test.com',motDePasse:'test123' },
    // autres fournisseurs...
  ];
  tickets:Article[]=[];

  constructor() { }

  getFournisseurByRef(ref: string): Fournisseur {
    // Exemple de logique pour associer une référence à un fournisseur
    if (ref.startsWith('SIM')) {
      return this.fournisseurs.find(f => f.nom === 'SIMOP');
    } else if (ref.startsWith('BRD')) {
      return this.fournisseurs.find(f => f.nom === 'BRIDGE');
    }
    
    else if (ref.startsWith('MI')) {
      return this.fournisseurs.find(f => f.nom === 'MIPS');
    }
   else if (ref.startsWith('SAM')) {
    return this.fournisseurs.find(f => f.nom === 'SAMSUNG');
  }
  else if (ref.startsWith('ATH')) {
    return this.fournisseurs.find(f => f.nom === 'EL ATHIR');
  }
  console.log("four",this.fournisseurs);
    // ajouter plus de conditions selon votre logique d'attribution

    // Retourner un fournisseur par défaut si aucun critère n'est rempli
    return this.fournisseurs[0]; // ou null, si vous voulez gérer l'absence de fournisseur
  }
  getTicketsFournisseur(fournisseurId: number): Article[] {
    // Filtrez les tickets en fonction de l'ID du fournisseur.
    // Ici, vous devriez interagir avec votre base de données ou service backend pour obtenir les données.
    return this.tickets.filter(ticket => ticket.fournisseur?.id === fournisseurId);
  }
}
