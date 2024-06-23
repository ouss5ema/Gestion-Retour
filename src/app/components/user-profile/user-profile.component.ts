import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'app/layouts/admin-layout/Models/Client';
import { ClientService } from 'app/layouts/admin-layout/Service/Client';
import { UserProfileService } from 'app/UserProfile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService,private userp:UserProfileService,private router: Router,private route: ActivatedRoute) {
    this.clientForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email],
    ]
    });
    this.route.params.subscribe(params => {
      const clientId = +params['id']; // le signe + convertit la chaîne en nombre
      // Charger les données du client ici si nécessaire
  });
  }

  isEditMode: boolean = false;

ngOnInit(): void {
    const userData = this.userp.getUserData();
    this.isEditMode = !!userData.id;
    if (this.isEditMode) {
        this.clientForm.patchValue(userData);
    } else {
        this.clientForm.reset();
    }
}

onSubmit(): void {
  if (this.clientForm.valid) {
    
      if (this.clientForm.value.id) {
          // Mode modification
          this.clientService.modifierClient(this.clientForm.value);
      } else {
          // Mode ajout
          this.clientService.ajouterClient(this.clientForm.value);
      }
      // this.loadClients();

      this.clientForm.reset(); // Réinitialiser le formulaire
      this.userp.setUserData({}); // Réinitialiser les données utilisateur stockées
      this.router.navigate(['/table-list']);
  }
}
  
}