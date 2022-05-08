import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../model/client';
import { ClientService } from '../../service/client.service';
import { AddClientComponent } from './add-client/add-client.component';
import { NbDialogService,  } from '@nebular/theme';
import { ActionClientComponent } from './action-client/action-client.component';

@Component({
  selector: 'ngx-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client : Client []= [];

  constructor(private clientService: ClientService,
    private dialogService: NbDialogService,
   
    ) 
    
    {}

    

  ngOnInit(): void {


    this.clientService.getAllClient().subscribe(
      data => {this.client = data;
              console.log('this of list::===>:',this.client) } ,
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
          renderComponent:  ActionClientComponent,
        //  onComponentInitFunction: (instance) => {
         //   instance.view.subscribe(row => {
            //  this.onCustomEvent(row);
         //   });
         // },
        },
        
      },
    };
  
  

    
  addNewClient(){
   //popUp
    this.dialogService.open(  AddClientComponent, {
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


