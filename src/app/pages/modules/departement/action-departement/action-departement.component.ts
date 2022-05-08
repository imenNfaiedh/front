import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DepartementService } from '../../../service/departement.service';
import { AddDepartementComponent } from '../add-departement/add-departement.component';

@Component({
  selector: 'ngx-action-departement',
  templateUrl: './action-departement.component.html',
  styleUrls: ['./action-departement.component.scss']
})
export class ActionDepartementComponent implements OnInit {
  @Input() rowData: any;
  modeView : boolean;
  constructor(private departementService : DepartementService,
    private dialogService: NbDialogService,) { }

  ngOnInit(): void {
  }

    //pour update
    onClick() {
      this.modeView = false;
    console.log("id editv01 ===<", this.rowData.id);
     //popUp
     this.dialogService.open(  AddDepartementComponent, {
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
      this.dialogService.open(  AddDepartementComponent, {
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
        this.departementService.deleteById(+this.rowData.id).subscribe(
          data => {console.log("sup ok") ,
          err=>{console.log("not sup");
          };
          }
        )
      }
  

}
