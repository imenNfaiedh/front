import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CollaborateurService } from '../../../service/collaborateur.service';
import { AddCollaborateurComponent } from '../add-collaborateur/add-collaborateur.component';

@Component({
  selector: 'ngx-action-collaborateur',
  templateUrl: './action-collaborateur.component.html',
  styleUrls: ['./action-collaborateur.component.scss']
})
export class ActionCollaborateurComponent implements OnInit {
  @Input() rowData: any;
  modeView:boolean;

  constructor(private clientService: CollaborateurService ,
    private dialogService: NbDialogService,) { }

  ngOnInit(): void {
  }


  onClick() {
    this.modeView = false;

    console.log("id editv01 ===<", this.rowData.id);
     //popUp
     this.dialogService.open(  AddCollaborateurComponent, {
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
    this.dialogService.open(  AddCollaborateurComponent, {
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
     console.log("id  delete===<", this.rowData.id);
     this.clientService.deleteById(+this.rowData.id).subscribe(
       data => {console.log("sup ok") ,
       err=>{console.log("not sup");
       };
       }
     )
   }

  

}
