import { Component, OnInit } from '@angular/core';
import { Mission } from '../../model/mission';
import { MissionService } from '../../service/mission.service';
import { Router } from '@angular/router';
import { AddMissionComponent } from './add-mission/add-mission.component';
import { NbDialogService } from '@nebular/theme';
import { ActionMissionComponent } from './action-mission/action-mission.component';

@Component({
  selector: 'ngx-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
  mission : Mission []= [];

  constructor(private missionService: MissionService,
    private router: Router,
    private dialogService: NbDialogService,
    ) { }

  ngOnInit(): void {
    this.missionService.getAllMission().subscribe(
    data => {this.mission = data;
            console.log('this of list::===>:',this.mission) } ,
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
        title: 'Name',
        type: 'string',
      },
      dateDebut: {
        title: 'Date Début',
        type: 'string',
      },
      dateFin: {
        title: 'Date Fin',
        type: 'string',
      },
      localisation: {
        title: 'Lieu_Mission',
        type: 'string',
      },
      nbHeurs: {
        title: 'NbHeurs',
        type: 'number',
      },
      collaborateur : {
        title: 'Collaborateur',
        type: 'text',
        valuePrepareFunction (row){
          if(row != null){
            return row.name;
          }
        }
      },
      client : {
        title: 'Client', 
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
        renderComponent:  ActionMissionComponent,}
      
     
     
    },
  };



  addNewMission(){
   
    this.dialogService.open(  AddMissionComponent, {
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
