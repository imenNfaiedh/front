import { Component, Input, OnInit,  } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ClientService } from '../../../service/client.service';
import { AddClientComponent } from '../add-client/add-client.component';

@Component({
  selector: 'ngx-action-client',
  templateUrl: './action-client.component.html',
  styleUrls: ['./action-client.component.scss']
})
export class ActionClientComponent implements OnInit {
  @Input() rowData: any;
modeView : boolean;

  constructor( private clientService: ClientService ,
    private dialogService: NbDialogService,) { }

    //pour update
  onClick() {
    this.modeView = false;
  console.log("id editv01 ===<", this.rowData.id);
   //popUp
   this.dialogService.open(  AddClientComponent, {
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
  this.dialogService.open(  AddClientComponent, {
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
  
  onClickDelete() {
  
    console.log("id  delete===<", this.rowData.id);
    this.clientService.deleteById(+this.rowData.id).subscribe(
      data => {console.log("sup ok") ,
      err=>{console.log("not sup");
      };
      }
    )
  }
 








  ngOnInit(): void {
    
  }

}
