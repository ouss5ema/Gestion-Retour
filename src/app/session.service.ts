// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Employe } from './layouts/admin-layout/Models/Employe';

// @Injectable({
//   providedIn: 'root'
// })
// export class SessionService {
//   private currentEmploye = new BehaviorSubject<Employe|null>(null);
//   currentEmploye$ = this.currentEmploye.asObservable();
// constructor() { }
// setEmploye(employe: Employe) {
//   this.currentEmploye.next(employe);
// }

// // Méthode pour récupérer l'employé actuel
// getEmploye() {
//   return this.currentEmploye.getValue();
// }

// // Méthode pour effacer l'employé actuel lors de la déconnexion
// clearEmploye() {
//   this.currentEmploye.next(null);
// }
// }
