// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFournisseurService } from 'app/auth-fournisseur.service';
import { EmployeService } from 'app/employe.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeService: EmployeService,
    private fournisseurService: AuthFournisseurService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required]],
      role: ['employé', Validators.required]
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const { email, motDePasse, role } = this.loginForm.value;

      if (role === 'employé') {
        this.employeLogin(email, motDePasse);
      } else if (role === 'fournisseur') {
        this.fournisseurLogin(email, motDePasse);
        console.log( this.fournisseurLogin(email, motDePasse));
      }
    } else {
      console.error('Formulaire invalide');
    }
  }

  employeLogin(email: string, motDePasse: string) {
    this.employeService.login(email, motDePasse, 'employé').then(employe => {
      if (employe) {
        // Logic to handle successful employee login
        this.router.navigate(['/dashboard']);
      }
    }).catch(() => {
      console.error('Échec de la connexion employé');
    });
  }

  fournisseurLogin(email: string, motDePasse: string) {
    this.fournisseurService.login(email, motDePasse).then(fournisseur => {
      if (fournisseur) {
        // Logic to handle successful supplier login
        this.router.navigate(['/fournisseur']); // Assurez-vous que cette route existe dans votre configuration de routing
      }
    }).catch(() => {
      console.error('Échec de la connexion fournisseur');
    });
  }
}
