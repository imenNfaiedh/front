import { Component, Input, OnInit } from '@angular/core';
import { CollaborateurService } from '../../../service/collaborateur.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ConstantValue } from '../../../model/constantValue';
import { NbComponentStatus, NbDialogRef,NbToastrService ,NbDialogService,NbGlobalPhysicalPosition} from '@nebular/theme';
import { ToastrService } from '../../../service/toastr.service';
import { Collaborateur } from '../../../model/collaborateur';
import { Departement } from '../../../model/departement';
import { DepartementService } from '../../../service/departement.service';



@Component({
  selector: 'ngx-add-collaborateur',
  templateUrl: './add-collaborateur.component.html',
  styleUrls: ['./add-collaborateur.component.scss']
})
export class AddCollaborateurComponent implements OnInit {
  collaborateurForm: FormGroup;
  collaborateur:Collaborateur;
  typeSubmit ='Ajouter';
  mode ="Ajouter"

  @Input() id;
  @Input() modeView: boolean

  departementList: Departement[]= [];



  constructor( 
    private collaborateurService: CollaborateurService,
    private formBuilder: FormBuilder ,
    protected dialogRef: NbDialogRef<AddCollaborateurComponent> ,
    private toastrService3:  ToastrService,
    private departementService: DepartementService,

    ) { }

    status: NbComponentStatus = 'success';

  ngOnInit(): void {
    //pour ajouter la liste du departement dans le popup du collaborateur
    this.departementService.getAllDepartement() .subscribe(
      rep => { this.departementList = rep},
      err =>{}
       );


    {this.createForm();


      if(this.id)
      { this.typeSubmit = "Modfier"
      this.mode = "Modfier";
       setTimeout( () => {

this.collaborateurService.getCollaborateurById(this.id).subscribe(

data => { this.collaborateur = data;

this.collaborateurForm.get('firstName').setValue(this.collaborateur.firstName)
this.collaborateurForm.get('lastName').setValue(this.collaborateur.lastName)
this.collaborateurForm.get('email').setValue(this.collaborateur.email)
this.collaborateurForm.get('telephone').setValue(this.collaborateur. telephone)
this.collaborateurForm.get('cin').setValue(this.collaborateur.cin)
this.collaborateurForm.get('address').setValue(this.collaborateur.  address)
this.collaborateurForm.get('codePostal').setValue(this.collaborateur.codePostal)
this.collaborateurForm.get('dateNaiss').setValue(this.collaborateur.dateNaiss)
this.collaborateurForm.get('numPasseport').setValue(this.collaborateur.numPasseport)
this.collaborateurForm.get('nationalite').setValue(this.collaborateur.nationalite)
this.collaborateurForm.get('pays').setValue(this.collaborateur.pays)
this.collaborateurForm.get('gouvernerat').setValue(this.collaborateur.gouvernerat)
this.collaborateurForm.get('grade').setValue(this.collaborateur.grade)
this.collaborateurForm.get('departement').setValue(this.collaborateur.departement)




if(this.modeView === true) {


  this.collaborateurForm.get('firstName').disable()
  this.collaborateurForm.get('firstName').disable()
  this.collaborateurForm.get('lastName').disable()
  this.collaborateurForm.get('email').disable()
  this.collaborateurForm.get('telephone').disable()
  this.collaborateurForm.get('cin').disable()
  this.collaborateurForm.get('address').disable()
  this.collaborateurForm.get('codePostal').disable()
  this.collaborateurForm.get('dateNaiss').disable()
  this.collaborateurForm.get('numPasseport').disable()
  this.collaborateurForm.get('nationalite').disable()
  this.collaborateurForm.get('pays').disable()
  this.collaborateurForm.get('gouvernerat').disable()
  this.collaborateurForm.get('grade').disable()
  this.collaborateurForm.get('departement').disable()




}}

);

          console.log("id line" , this.id);
          console.log(" mod edit");
          this.collaborateurForm.get('firstName').setValue("imen 0001")
        },300)
       
        // patch form
      }
     
  }}


  createForm (){
    this.collaborateurForm = this.formBuilder.group({
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
         grade : [ null,[Validators.required  ]],
         departement:[null,[Validators.required  ]]



        
        

      
});
}

onSubmit(){

  /*si le mode sera ajouter ==> on va ajouter un nouveau collaborateur 
  et afficher une notification d'ajout avec succès
  si non on va faire une modification (update)
  */
  
  if (this.mode === 'Ajouter'){
  console.log( this.collaborateurForm.value)
  console.log( this.collaborateurForm.invalid)
  this.collaborateurService.addCollaborateur(this.collaborateurForm.value).subscribe(
    data => {console.log(data)
      this.toastrService3.showToast(this.status , 'Ajout Collaborateur' , 'votre Collaborateur a été ajouté avec seccès');
      this.collaborateurForm.reset();
      
      ;},
    err=>{},
    
  );
    }
    else
    {
      this.collaborateurService. updateCollaborateur(this.collaborateurForm.value , this.id).subscribe(
        data => {console.log(data)
          this.toastrService3.showToast(this.status , 'Modfier Collaborateur' , 'votre Collaborateur a été  Modfié avec seccès');
          this.collaborateurForm.reset();
          
          ;},
        err=>{},
        
      );
    }
    
   }
    
 

  reset()
  {
    this.collaborateurForm.reset();
  }

  closeDialog(result) {
    this.dialogRef.close(result);
  }

}

