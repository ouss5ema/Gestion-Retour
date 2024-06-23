export class Employe {
    id: number;
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
    role: 'employé' | 'fournisseur'; // Ici vous pouvez définir d'autres rôles si nécessaire
    motDePasse: string;
  }
  