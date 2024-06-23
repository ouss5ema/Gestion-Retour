import { Client } from "./Client";
import { Fournisseur } from "./Fournisseur";


export class Article {
    id: number;
    client : Client;
    fournisseur?: Fournisseur;
    nomArticle: string; // Ajout du nom de l'article
    reference: string;  // Ajout de la référence de l'article
    dateAchat: Date;
  typeRetour: 'sous-garantie' | 'hors-garantie' | 'demande-interne';
  etat: string;
  panne: string;
  images: string[];
  dateCreation: Date;
  statut: 'encours' | 'resolu' | 'clos';
  progression: number;
  constructor(data?: Partial<Article>) {
    if (data) {
        Object.assign(this, data);
        this.progression = this.calculateProgress(this.statut);
    }
}
calculateProgress(status: 'encours' | 'resolu' | 'clos'): number {
  let progress;
  switch (status) {
    case 'encours':
      progress = 50; // ou une autre valeur pour "en cours"
      break;
    case 'resolu':
      progress = 75; // ou une autre valeur pour "résolu"
      break;
    case 'clos':
      progress = 100; // 100% pour un ticket "clos"
      break;
    default:
      progress = 0; // Valeur par défaut si le statut est inconnu
  }
  return progress; // Retourner la valeur calculée
}

}