import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from 'app/layouts/admin-layout/Service/Client';
import { DataSharingService } from 'app/data-sharing.service';
import { Client } from 'app/layouts/admin-layout/Models/Client';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  dataSource = new MatTableDataSource<Client>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'telephone', 'email', 'Actions'];
clients: any;
clientForm: any;
  constructor(private ClientService:ClientService,private dialog: MatDialog, private router: Router) { }
  

  ngOnInit():void {
    // this.ClientService.getClients();
    // console.log("c",this.ClientService.getClients());
  }

}
