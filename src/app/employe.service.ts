import { Injectable } from '@angular/core';
import { Employe } from './layouts/admin-layout/Models/Employe';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private currentUser: Employe | null = null;
  private employeSource = new BehaviorSubject<Employe | null>(null);
  employe$ = this.employeSource.asObservable();
  private employes: Employe[] = [
    { id: 1, nom: 'oussema', prenom: 'Aoun', telephone: '56400096', email: 'test@test.com', role: 'employé', motDePasse: 'test123' },
    // ...other employees
  ];

  constructor() { }

  // Updated login method to include role validation
  login(email: string, motDePasse: string, role: string): Promise<Employe | null> {
    return new Promise((resolve, reject) => {
      const employe = this.employes.find(e => e.email === email && e.motDePasse === motDePasse && e.role === role);
      if (employe) {
        resolve(employe);
      } else {
        reject(null);
      }
    });
  }
  getCurrentUser(): Employe | null {
    return this.currentUser;
  }

  // Method to set the current user
  setCurrentUser(employe: Employe): void {
    this.currentUser = employe;
  }
  setEmploye(employe: Employe) {
    this.employeSource.next(employe);
  }
  
  // Appelée pour déconnecter l'employé
  clearEmploye() {
    // Effacez l'état de l'utilisateur ici, par exemple, en effaçant le token de stockage local
    localStorage.removeItem('userToken'); // Exemple d'effacement du token
    // Si vous utilisez BehaviorSubject pour stocker les détails de l'utilisateur, mettez-le à null
    this.employeSource.next(null);
}
  // Après la connexion réussie


  // ...other methods
}
