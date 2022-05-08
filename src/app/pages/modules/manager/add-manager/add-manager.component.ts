import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ManagerService } from '../../../service/manager.service';
import { NbComponentStatus, NbDialogRef,NbToastrService ,NbDialogService,NbGlobalPhysicalPosition} from '@nebular/theme';
import { ConstantValue } from '../../../model/constantValue';
import { ToastrService } from '../../../service/toastr.service';
import { Manager } from '../../../model/manager';



@Component({
  selector: 'ngx-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss']
})
export class AddManagerComponent implements OnInit {
   managerForm: FormGroup;
   typeSubmit ='Ajouter';
   mode ="Ajouter";
   manager : Manager;


   @Input() id;
   @Input() modeView: boolean


  constructor(
    private  formBuilder: FormBuilder ,
    private managerService: ManagerService,
    protected dialogRef: NbDialogRef<AddManagerComponent> ,
    private toastrService3:  ToastrService,


    ) { }

    status: NbComponentStatus = 'success';

  ngOnInit(): void { 


   { this.createForm();


    if(this.id)
    { this.typeSubmit = "Modfier"
    this.mode = "Modfier";
     setTimeout( () => {

this.managerService.getManagerById(this.id).subscribe(

data => { this.manager = data;

this.managerForm.get('firstName').setValue(this.manager.firstName)
this.managerForm.get('lastName').setValue(this.manager.lastName)
this.managerForm.get('email').setValue(this.manager.email)
this.managerForm.get('telephone').setValue(this.manager.telephone)
this.managerForm.get('cin').setValue(this.manager.cin)
this.managerForm.get('address').setValue(this.manager.address)
this.managerForm.get('codePostal').setValue(this.manager.codePostal)
this.managerForm.get('dateNaiss').setValue(this.manager.dateNaiss)
this.managerForm.get('numPasseport').setValue(this.manager.numPasseport)
this.managerForm.get('nationalite').setValue(this.manager.nationalite)
this.managerForm.get('pays').setValue(this.manager.pays)
this.managerForm.get('gouvernerat').setValue(this.manager.gouvernerat)




if(this.modeView === true) {


this.managerForm.get('firstName').disable()
this.managerForm.get('firstName').disable()
this.managerForm.get('lastName').disable()
this.managerForm.get('email').disable()
this.managerForm.get('telephone').disable()
this.managerForm.get('cin').disable()
this.managerForm.get('address').disable()
this.managerForm.get('codePostal').disable()
this.managerForm.get('dateNaiss').disable()
this.managerForm.get('numPasseport').disable()
this.managerForm.get('nationalite').disable()
this.managerForm.get('pays').disable()
this.managerForm.get('gouvernerat').disable()
this.managerForm.get('grade').disable()




}}

);

        console.log("id line" , this.id);
        console.log(" mod edit");
        this.managerForm.get('firstName').setValue("imen 0001")
      },300)
     
      // patch form
    }


   
  }}
  


















  createForm () { 
    this.managerForm = this.formBuilder .group ({
      firstName : [ null, [Validators.required ,Validators.pattern(ConstantValue.ONLYTEXT_REGEX)]],
         lastName : [null, [Validators.required ,Validators.pattern(ConstantValue.ONLYTEXT_REGEX)]],
         dateNaiss : [null],
         cin : [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
         numPasseport : [ null],
         nationalite : [ null,[Validators.pattern(ConstantValue.ONLYTEXT_REGEX)]],
         address : [ null,[Validators.required  ]],
         gouvernerat : [ null,[Validators.required  ]],
         telephone:[null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)
          ,Validators.pattern(ConstantValue.PHONE_REGEX)]],
         email:[null,[Validators.required, Validators.pattern(ConstantValue.MAIL_REGEX)]],
      
         pays : [null],
         codePostal :[null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],



         

    });
}

onSubmit(){
  if (this.mode === 'Ajouter'){

  console.log( this.managerForm.value)
  console.log( this.managerForm.invalid)
  this.managerService.addManager(this.managerForm.value).subscribe(
    data => {console.log(data)
      this.toastrService3.showToast(this.status , 'Ajout Manager' , 'votre Manager a été ajouté avec seccès');
      this.managerForm.reset();
      
      
      
      ;},
    err=>{},
    
  );
  }
  else
  {
    this.managerService. updateManager(this.managerForm.value , this.id).subscribe(
      data => {console.log(data)
        this.toastrService3.showToast(this.status , 'Modfier Manager' , 'votre Manager a été  Modfié avec seccès');
        this.managerForm.reset();
        
        ;},
      err=>{},
      
    );
  }
  
  }

  reset()
{
  this.managerForm.reset();
}

closeDialog(result) {
  this.dialogRef.close(result);
}







}
