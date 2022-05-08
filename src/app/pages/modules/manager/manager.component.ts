import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from '../../model/manager';
import { ManagerService } from '../../service/manager.service';
import { NbDialogService } from '@nebular/theme';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { ActionManagerComponent } from './action-manager/action-manager.component';

@Component({
  selector: 'ngx-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  manager : Manager []= [];

  constructor(private managerService: ManagerService,
    private dialogService: NbDialogService,
              private router: Router) { }

  ngOnInit(): void {
    this.managerService.getAllManager().subscribe(
      data => {this.manager = data;
              console.log('this of list::===>:',this.manager) } ,
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
      custom: [],
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
      actions: {
        title: 'Actions',
        type: 'custom',
        sort: false,
        position: 'right',
        renderComponent:  ActionManagerComponent,
      }
     
    },
  };

  addNewManager(){

    this.dialogService.open(  AddManagerComponent, {
      hasBackdrop: true,
      closeOnBackdropClick: true,
      hasScroll: true,
      autoFocus: false,
      context: {
      },
      dialogClass: 'model-full',
    }).onClose.subscribe(value => {
      if (value) {
       
        
      }
    });
  }

}
