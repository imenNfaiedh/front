import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { ActionUserComponent } from './action-user/action-user.component';
//import { AddUser2Component } from './add-user2/add-user2.component';
import { AddUser2Component } from './add-user2/add-user2.component';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

user : User []=[];


  constructor( private userService : UserService,
    private dialogService: NbDialogService,

  ) { }



  ngOnInit(): void {

  }


  //le table d'un user 
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
        type: 'number',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
     
      actions: {
        title: 'Actions',
        type: 'custom',
        sort: false,
        position: 'right',
        renderComponent:  ActionUserComponent,
      
      },
      
    },
  };



  addNewUser(){
    //popUp
     this.dialogService.open(  AddUser2Component, {
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