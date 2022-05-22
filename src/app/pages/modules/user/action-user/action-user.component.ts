import { Component, Input,OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UserService } from '../../../service/user.service';
import { AddUser2Component } from '../add-user2/add-user2.component';

@Component({
  selector: 'ngx-action-user',
  templateUrl: './action-user.component.html',
  styleUrls: ['./action-user.component.scss']
})
export class ActionUserComponent implements OnInit {
  @Input() rowData: any;
  modeView : boolean;

  constructor(
    private userService : UserService,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit(): void {
  }


   //pour update
   onClick() {
    this.modeView = false;
  console.log("id editv01 ===<", this.rowData.id);
   //popUp
   this.dialogService.open(  AddUser2Component, {
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
  this.dialogService.open(  AddUser2Component, {
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
    this.userService.deleteById(+this.rowData.id).subscribe(
      data => {console.log("sup ok") ,
      err=>{console.log("not sup");
      };
      }
    )
  }
 





}
