
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TicketStatusPopupComponent } from './TicketStatusPopup/TicketStatusPopup.component';
import { FirebaseModule } from './Firebase.module';
import { FournisseurComponent } from './Fournisseur/Fournisseur.component';
// import { VoirticketComponent } from './voirticket/voirticket.component';
// import { FournisseurComponent } from './Fournisseur/Fournisseur.component';


 



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    MatSortModule ,
    MatPaginatorModule, 
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FirebaseModule
    
    
    
    
    
    
  ],
  declarations: [						
    AppComponent,
    AdminLayoutComponent,
      TicketStatusPopupComponent,
      FournisseurComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
