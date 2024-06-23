import { Injectable } from '@angular/core';
import { Fournisseur } from './layouts/admin-layout/Models/Fournisseur';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFournisseurService {
  private currentFournisseur: Fournisseur | null = null;
  private fournisseurSource = new BehaviorSubject<Fournisseur | null>(null);
  fournisseur$ = this.fournisseurSource.asObservable();
  private fournisseurs: Fournisseur[] = [
    { id: 1, nom: 'El Athir',email:'elathir@test.com',motDePasse:'test123' },
    { id: 2, nom: 'SIMOP',email:'simop@test.com',motDePasse:'test123' },
    { id: 3, nom: 'MIPS',email:'mips@test.com',motDePasse:'test123' },
    { id: 4, nom: 'BRIDGE',email:'bridge@test.com',motDePasse:'test123' },
    { id: 5, nom: 'SAMSUNG',email:'samsung@test.com',motDePasse:'test123' },
    // ...other fournisseurs
  ];
constructor() { }
login(email: string, motDePasse: string): Promise<Fournisseur | null> {
  // Logique de connexion pour les fournisseurs
  const fournisseur = this.fournisseurs.find(f => f.email === email && f.motDePasse === motDePasse);
  if (fournisseur) {
    localStorage.setItem('currentFournisseur', JSON.stringify(fournisseur.nom));
    this.setCurrentFournisseur(fournisseur);
    return Promise.resolve(fournisseur);
  } else {
    return Promise.reject('Fournisseur non trouvé');
  }
}


setCurrentFournisseur(fournisseur: Fournisseur): void {
  this.currentFournisseur = fournisseur;
  this.fournisseurSource.next(fournisseur);
}

clearFournisseur() {
  localStorage.removeItem('fournisseurToken'); // Exemple d'effacement du token
  this.fournisseurSource.next(null);
}
// getCurrentFournisseurId(): number | null {
//   const fournisseurId = localStorage.getItem('currentFournisseur');
//   console.log("fournisseur1=",fournisseurId);
//   return fournisseurId ? JSON.parse(fournisseurId) : null;
  
// }
getCurrentFournisseurName(): string | null {
  return localStorage.getItem('currentFournisseur');
}
}
