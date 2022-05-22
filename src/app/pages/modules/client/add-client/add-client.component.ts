import { Component, Input, OnInit,  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NbComponentStatus, NbDialogRef, NbDialogService, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { Client } from '../../../model/client';
import { ConstantValue } from '../../../model/constantValue';
import { ClientService } from '../../../service/client.service';
import { ToastrService } from '../../../service/toastr.service';


@Component({
  selector: 'ngx-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

clientForm: FormGroup;
client: Client;
typeSubmit ='Ajouter';
mode ="Ajouter"
   @Input() id;
   @Input() modeView: boolean
   
  constructor(
    private formBuilder: FormBuilder ,
    private clientService: ClientService,
    protected dialogRef: NbDialogRef<AddClientComponent> ,
    private toastrService2:  ToastrService,
    
  
  ) { }

  status: NbComponentStatus = 'success';

  ngOnInit(): void 

  
  {this.createForm();
     
  console.log("mode view:::", this.modeView);
  
      if(this.id)
      {
        this.typeSubmit = "Modfier"
        this.mode = "Modfier";
         setTimeout( () => {

this.clientService.getClientById(this.id).subscribe(

data => { this.client = data;

  this.clientForm.get('firstName').setValue(this.client.firstName)
  this.clientForm.get('lastName').setValue(this.client.lastName)
  this.clientForm.get('email').setValue(this.client.email)
  this.clientForm.get('telephone').setValue(this.client. telephone)
  this.clientForm.get('ville').setValue(this.client.ville)
   this.clientForm.get('address').setValue(this.client.  address)
  this.clientForm.get('codePostal').setValue(this.client.codePostal)


  if(this.modeView === true) {


    this.clientForm.get('firstName').disable()
    this.clientForm.get('lastName'). disable()
    this.clientForm.get('email'). disable()
    this.clientForm.get('telephone'). disable()
    this.clientForm.get('ville'). disable()
     this.clientForm.get('address'). disable()
    this.clientForm.get('codePostal'). disable()

  }




}

);
          console.log("id line" , this.id);
          console.log(" mode edit");
          this.clientForm.get('firstName').setValue(this.id)
         
        },300)
       
        // patch form
      }
     

      

  
  }

  createForm (){
    this.clientForm = this.formBuilder.group({
      firstName :[null, [Validators.required ,Validators.pattern(ConstantValue.ONLYTEXT_REGEX)]], 
      lastName : [null, [Validators.required, Validators.pattern(ConstantValue.ONLYTEXT_REGEX)]],     
      address:[null, [Validators.required]],
      ville:[null, [Validators.required]],
      codePostal :[null, [Validators.required, Validators.minLength(4), Validators.maxLength(4),]],

      telephone:[null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)
      ,Validators.pattern(ConstantValue.PHONE_REGEX)]],

      email:[null,[Validators.required, Validators.pattern(ConstantValue.MAIL_REGEX)]],
      
});
  }

onSubmit(){
  
if (this.mode === 'Ajouter'){
  this.markAsDirty()

  console.log( this.clientForm.value)
  console.log( this.clientForm.invalid)
  this.clientService.addClient(this.clientForm.value).subscribe(
    data => {console.log(data)
      this.toastrService2.showToast(this.status , 'Ajout Client' , 'votre client a été ajouté avec seccès');
      this.clientForm.reset();
      
      ;},
    err=>{},
    
  );
}else
{

 // this.markAsDirty()

  console.log( this.clientForm.value)
  console.log( this.clientForm.invalid)
  this.clientService. updateClient(this.clientForm.value , this.id).subscribe(
    data => {console.log(data)
      this.toastrService2.showToast(this.status , 'Modfier Client' , 'votre client a été  Modfier avec seccès');
      this.clientForm.reset();
      
      ;},
    err=>{},
    
  );
}

  }

  markAsDirty() {
    this.clientForm.get('firstName').markAsDirty();
  
  }

  reset()
  {
    this.clientForm.reset();
  }
  



  closeDialog(result) {
    this.dialogRef.close(result);
  }

  



}
