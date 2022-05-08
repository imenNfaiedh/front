import { Component, OnInit } from '@angular/core';
import { Departement } from '../../model/departement';
import { DepartementService } from '../../service/departement.service';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ActionDepartementComponent } from './action-departement/action-departement.component';

@Component({
  selector: 'ngx-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {

  departement : Departement []= [];
  
  constructor(private departementService: DepartementService,
    private router : Router,
    private dialogService: NbDialogService,
    ) { }

  ngOnInit(): void {this.departementService.getAllDepartement().subscribe(
    data => {this.departement = data;
            console.log('this of list::===>:',this.departement) } ,
             error => {
              console.log('error') }
            );
  }


  settings = {

    pager: {
      display: true,
      perPage: 6,
    },

   actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false,
      custom: [
      
    ],
      position: 'right'
    },

    
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Nom',
        type: 'string',
      },
      specialite: {
        title: 'Spécialité',
        type: 'string',
      },
      manager : {
        title: 'Manager',
        type: 'text',
        valuePrepareFunction (row){
          if(row != null){
            return row.firstName + " " + row.lastName ;
          }
        
        }
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        sort: false,
        position: 'right',
        renderComponent:  ActionDepartementComponent,
      
      },
      
    },
  };
      
   

  addNewDepartement(){
    //popUp
     this.dialogService.open(  AddDepartementComponent, {
       hasBackdrop: true,
       closeOnBackdropClick: true,
       hasScroll: true,
       autoFocus: false,
       context: {
       },
       dialogClass: 'model-full',
     }).onClose.subscribe(value => {
       if (value) {} 
     });
     }
 
}
