import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FournisseurService } from 'app/Fournisseur.service';
import { Article } from 'app/layouts/admin-layout/Models/Article';
import { Client } from 'app/layouts/admin-layout/Models/Client';
import { OpenTicketService } from 'app/open-ticket.service';

@Component({
  selector: 'app-voirticket',
  templateUrl: './voirticket.component.html',
  styleUrls: ['./voirticket.component.scss']
})
export class VoirticketComponent implements OnInit {
  article: Article;
  client:Client;
 
  constructor(private openticketService: OpenTicketService,private route:ActivatedRoute,private fournisseurService:FournisseurService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.article = this.openticketService.getTicketById(id);
    // Définir le statut de manière aléatoire
  const statusOptions = ['encours', 'resolu', 'clos'];
  const randomIndex = Math.floor(Math.random() * statusOptions.length);
  this.article.statut = statusOptions[randomIndex] as 'encours' | 'resolu' | 'clos';
  this.article.statut = this.getRandomStatus();
  // Calculer la progression en fonction du statut aléatoire
  this.article.progression = this.calculateProgress(this.article.statut);
    console.log(this.article.id);
  }
  getProgressValue(article: Article): string {
    switch (article.statut) {
      case 'encours':
        return '60%'; // Exemple de valeur, ajustez selon vos besoins
      case 'resolu':
        return '90%';
      case 'clos':
        return '100%';
      default:
        return '0%';
    }
  }
  
  getProgressBarClass(article: Article): string {
    switch (article.statut) {
      case 'encours':
        return 'progress-bar bg-warning'; // Couleur orange pour 'en cours'
      case 'resolu':
        return 'progress-bar bg-info'; // Couleur bleue pour 'résolu'
      case 'clos':
        return 'progress-bar bg-success'; // Couleur verte pour 'clos'
      default:
        return 'progress-bar bg-secondary'; // Couleur par défaut
    }
  }
  
  getStatusText(article: Article): string {
    switch (article.statut) {
      case 'encours':
        return 'En cours';
      case 'resolu':
        return 'Résolu';
      case 'clos':
        return 'Clos';
      default:
        return 'Non défini';
    }
  }
  calculateProgress(status: 'encours' | 'resolu' | 'clos'): number {
    switch (status) {
      case 'encours':
        return 50; // ou une autre valeur représentant le progrès pour cet état
      case 'resolu':
        return 75; // ou une autre valeur
      case 'clos':
        return 100;
      default:
        return 0;
    }
  }
  getRandomStatus(): 'encours' | 'resolu' | 'clos' {
    const statuses = ['encours', 'resolu', 'clos'];
    return statuses[Math.floor(Math.random() * statuses.length)] as 'encours' | 'resolu' | 'clos';
  }
  imprimerTicket(article: Article) {
    let popupWinindow;
    const innerContents = `<html>
        <head>
          <title>Print tab</title>
          <style>
          // Ajoutez ici vos styles pour l'impression
          </style>
        </head>
        <body onload="window.print()">
          <h1>Details du Ticket</h1>
          <p>ID Ticket: ${article.id}</p>
          <p>Date Creation: ${article.dateCreation}</p>
          <p>Nom Client: ${article.client.nom}</p>
          <p>Prenom Client: ${article.client.prenom}</p>
         <p>Nom de l'article: ${article.nomArticle}</p>
          <p>Reference: ${article.reference}</p>
          <p>Etat: ${article.etat}</p>
          <p>Panne: ${article.panne}</p>
         
        </body>
      </html>`;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write(innerContents);
    popupWinindow.document.close();
  }
  createArticle(articleData: Partial<Article>): Article {
    const article = new Article(articleData);
    article.fournisseur = this.fournisseurService.getFournisseurByRef(article.reference);
    // Ajouter l'article à votre tableau d'articles ici
    return article;
  }
}
