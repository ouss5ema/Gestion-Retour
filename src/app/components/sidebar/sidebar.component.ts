import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeService } from 'app/employe.service';
import { Employe } from 'app/layouts/admin-layout/Models/Employe';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/table-list', title: 'Liste des utilisateurs',  icon:'library_books', class: '' },
    { path: '/user-profile', title: 'Ajout utilisateur',  icon:'person', class: '' },
    { path: '/openticket', title: 'Ouvrir un ticket',  icon:'add', class: '' },
    { path: '/listeticket', title: 'Liste des tickets',  icon:'list_alt', class: '' },
    { path: '/voirticket', title: 'Voir Tickets',  icon:'visibility', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  currentUser: Employe | null = null;
  employeName: string = '';
  isAuthenticated: boolean = false; // Ajout d'une variable pour suivre l'authentification

  constructor(private employeService: EmployeService, private router: Router) { }

  ngOnInit() {
    this.employeService.employe$.subscribe((employe: Employe | null) => {
      if (employe) {
        this.employeName = `${employe.prenom} ${employe.nom}`;
        console.log("user name",this.employeName)
        this.isAuthenticated = true; // Mettre à jour l'état d'authentification
      } else {
        this.isAuthenticated = false; // Réinitialiser l'authentification si aucun employé n'est présent
      }
    });
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    return $(window).width() <= 991;
  }

  logout() {
    this.employeService.clearEmploye(); // Supprimez les données de l'employé actuel
    this.employeName = '';  
    this.isAuthenticated = false;// Mettre à jour l'état d'authentification
    this.router.navigate(['/login']); // Redirigez l'utilisateur vers la page de connexion
  }
}
