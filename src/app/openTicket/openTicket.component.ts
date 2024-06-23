import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageShareService } from 'app/image-share.service';
import { Article } from 'app/layouts/admin-layout/Models/Article';
import { OpenTicketService } from 'app/open-ticket.service';
import { UserProfileService } from 'app/UserProfile.service';

@Component({
  selector: 'app-openTicket',
  templateUrl: './openTicket.component.html',
  styleUrls: ['./openTicket.component.scss']
})
export class OpenTicketComponent implements OnInit {
  ticketForm: FormGroup;
  userData: any; // Vous pouvez remplacer any par un type spécifique si nécessaire

  constructor(private userProfileService: UserProfileService,private imageShareService: ImageShareService,private fb: FormBuilder, private ticketService: OpenTicketService,private router:Router) { 
    this.ticketForm = this.fb.group({
      nom: [{value: '', disabled: true}, Validators.required], // Pré-rempli et désactivé, supposant que cela vient de la sélection d'un client
      prenom: [{value: '', disabled: true}, Validators.required], // Pré-rempli et désactivé
      nomArticle: ['', Validators.required],
      reference: ['', Validators.required],
      dateAchat: ['', Validators.required],
      typeRetour: ['', Validators.required],
      etat: ['', Validators.required],
      panne: ['', Validators.required],
      image: ['' ]  // Assumer que c'est un champ optionnel pour l'instant
    });
  }

  ngOnInit(): void {
    this.userData=this.userProfileService.getUserData();
  }
  onSubmit(): void {
    if (this.ticketForm.valid) {
      const ticketData = this.ticketForm.getRawValue();
      const clientData = this.userProfileService.getUserData(); // Récupération des données du client
      const selectedImagePath = ticketData.selectedImage;
      const imagesForTicket = [...this.imageShareService.getImages()];

      console.log('Client Data:', clientData); // Vérifiez les données du client
  
      const ticket = new Article({
        ...ticketData,
        client: clientData,
        images: imagesForTicket
      });
  
      this.ticketService.addTicket(ticket);
      this.imageShareService.resetImages();
      this.router.navigate(['/listeticket']);
    }
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      const images: string[] = [];

      Array.from(input.files).forEach((file: Blob) => {
        if (file instanceof File) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const result = e.target?.result;
            if (typeof result === 'string') {
              images.push(result);
            }

            if (images.length === input.files!.length) {
              this.imageShareService.setImages(images);
            }
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }
  
  

}
