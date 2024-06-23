import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'app/layouts/admin-layout/Models/Article';

@Component({
  selector: 'app-TicketStatusPopup',
  template: `
    <div class="popup" *ngIf="showPopup">
      <div class="popup-content">
        <h3>Statut du ticket: {{ ticket.statut }}</h3>
        <div class="progress-bar-container">
          <div class="progress-bar" [style.width]="progressValue + '%'"></div>
        </div>
        <!-- Bouton de fermeture ou autre contenu -->
      </div>
    </div>
  `,
  styles: [`
    .popup { /* Votre style pour le fond modale */ }
    .popup-content { /* Votre style pour le contenu du popup */ }
    .progress-bar-container { /* Votre style pour le conteneur de la barre de progression */ }
    .progress-bar { /* Votre style pour la barre de progression */ }
  `]
})
export class TicketStatusPopupComponent implements OnInit {
  @Input() ticket: Article; // L'objet ticket passé au composant
  showPopup: boolean = false; // Contrôle l'affichage du popup
  progressValue: number; // La valeur pour la largeur de la barre de progression

  constructor() {
    // Initialiser la valeur de progressValue en fonction de ticket.statut
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Méthode pour ouvrir le popup
  openPopup() {
    this.showPopup = true;
    // Autres logiques si nécessaire
  }

  // Méthode pour fermer le popup
  closePopup() {
    this.showPopup = false;
    // Autres logiques si nécessaire
  }

}
