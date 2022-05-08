import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ManagerService } from '../../../service/manager.service';
import { AddManagerComponent } from '../add-manager/add-manager.component';

@Component({
  selector: 'ngx-action-manager',
  templateUrl: './action-manager.component.html',
  styleUrls: ['./action-manager.component.scss']
})
export class ActionManagerComponent implements OnInit {
  @Input() rowData: any;
  modeView:boolean;

  constructor(private managerService: ManagerService,
    private dialogService: NbDialogService,) { }

  ngOnInit(): void {
  } 




  onClick()
  {
    this.modeView = false;
     //popUp
     this.dialogService.open(  AddManagerComponent, {
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



  onClickView()
  {
    this.modeView = true;
    //PopUp
    this.dialogService.open(  AddManagerComponent, {
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
    this.managerService.deleteById(+this.rowData.id).subscribe() 
  }
}
