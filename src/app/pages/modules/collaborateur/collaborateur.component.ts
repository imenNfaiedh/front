import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../../model/collaborateur';
import { CollaborateurService } from '../../service/collaborateur.service';
import { Router } from '@angular/router';
import { AddCollaborateurComponent } from './add-collaborateur/add-collaborateur.component';
import { NbDialogService} from '@nebular/theme';
import { ActionCollaborateurComponent } from './action-collaborateur/action-collaborateur.component';



@Component({
  selector: 'ngx-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.scss']
})
export class CollaborateurComponent implements OnInit {

  collaborateur : Collaborateur []= [];
 

  constructor(private collaborateurService: CollaborateurService,
    private router: Router,
    private dialogService: NbDialogService,
    ) { }

  ngOnInit(): void {

  this.collaborateurService.getAllCollaborateur().subscribe(
    data => {this.collaborateur = data;
            console.log('this of list::===>:',this.collaborateur) } ,
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
     
      position: 'right'
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'Nom',
        type: 'string',
      },
      lastName: {
        title: 'Prénom',
        type: 'string',
      },
      telephone: {
        title: 'Tel',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      grade: {
        title: 'Grade',
        type: 'number',
      },
      departement : {
        title: 'département',
        type: 'text',
        valuePrepareFunction (row){
          console.log('row==>,' , row)
          if(row != null){
            return row.name ;
          }
        
        }
      },

      actions: {
        title: 'Actions',
        type: 'custom',
        sort: false,
        position: 'right',
        renderComponent:  ActionCollaborateurComponent,
      //  onComponentInitFunction: (instance) => {
       //   instance.view.subscribe(row => {
          //  this.onCustomEvent(row);
       //   });
       // },
      },
      
    },
    
  };


 
  addNewCollaborateur(){
   
    this.dialogService.open(  AddCollaborateurComponent, {
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
