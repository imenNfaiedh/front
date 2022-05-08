import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { MissionService } from '../../../service/mission.service';
import { AddMissionComponent } from '../add-mission/add-mission.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-action-mission',
  templateUrl: './action-mission.component.html',
  styleUrls: ['./action-mission.component.scss']
})
export class ActionMissionComponent implements OnInit {
  @Input() rowData: any;
  modeView:boolean;



  constructor(private missionService: MissionService ,
    private dialogService: NbDialogService,
    private location: Location,
    private router: Router, ) { }

  ngOnInit(): void {
  }
  onClick() {

    this.modeView = false;
     //popUp
     this.dialogService.open(  AddMissionComponent, {
      hasBackdrop: true,
      closeOnBackdropClick: true,
      hasScroll: true,
      autoFocus: false,
      context: {
        id: this.rowData.id,
        modeView : this.modeView,

      },
      dialogClass: 'model-full',
    }).onClose.subscribe(value => {
      if (value) {} 
    });
    
  }


  onClickView() {
    this.modeView = true;
    //PopUp
    this.dialogService.open(  AddMissionComponent, {
    hasBackdrop: true,
    closeOnBackdropClick: true,
    hasScroll: true,
    autoFocus: false,
    context: {
      id: this.rowData.id,
      modeView : this.modeView,
    },
    dialogClass: 'model-full',
  }).onClose.subscribe(value => {
    if (value) {} 
  });
    
  }



  onClickDelete() 
  {
    this.missionService.deleteById(+this.rowData.id).subscribe()
  }

  



}
