import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userData: any = {};
constructor() { }
// Méthode pour définir les données utilisateur
setUserData(data: any): void {
  this.userData = { ...data };
  console.log("ouss",data);
}

// Méthode pour récupérer les données utilisateur
getUserData(): any {
  return this.userData;
}
resetUserData(): void {
  this.userData = {}; // Réinitialiser les données utilisateur
}
}
