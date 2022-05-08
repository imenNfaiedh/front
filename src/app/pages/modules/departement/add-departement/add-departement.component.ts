import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NbComponentStatus, NbDialogRef } from '@nebular/theme';
import { Departement } from '../../../model/departement';
import { DepartementService } from '../../../service/departement.service';
import { ToastrService } from '../../../service/toastr.service';
import { ConstantValue } from '../../../model/constantValue';
import { Manager } from '../../../model/manager';
import { ManagerService } from '../../../service/manager.service';

@Component({
  selector: 'ngx-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.scss']
})
export class AddDepartementComponent implements OnInit {

  departementForm: FormGroup;
  departement: Departement;
  typeSubmit ='Ajouter';
  mode ="Ajouter"
     @Input() id;
     @Input() modeView: boolean


     managerList: Manager[]= [];

  constructor(
    private formBuilder: FormBuilder ,
    private departementService: DepartementService,
    protected dialogRef: NbDialogRef<AddDepartementComponent>,
    private toastrService2:  ToastrService,
    private managerService: ManagerService
  ) { }
   
  //la succés de la notification c à d la couleur vert
  status: NbComponentStatus = 'success';


  ngOnInit(): void {
//pour ajouter la liste du manager dans le popup du departement
    this.managerService.getAllManager() .subscribe(
      rep => { this.managerList = rep},
      err =>{}
       );
      
      
      
      this.createForm();
     
      console.log("mode view:::", this.modeView);
      
          if(this.id)
          {
            this.typeSubmit = "Modfier"
            this.mode = "Modfier";
             setTimeout( () => {
    
    this.departementService.getDepartementById(this.id).subscribe(
    
    data => { this.departement = data;
      this.departementForm.get('name').setValue(this.departement.name)
      this.departementForm.get('specialite').setValue(this.departement.specialite)
      this.departementForm.get('manager').setValue(this.departement.manager)

      
    
      if(this.modeView === true) {
        this.departementForm.get('name').disable()
        this.departementForm.get('specialite').disable() 
        this.departementForm.get('manager').disable() 

      }
    }
    );
              console.log("id line" , this.id);
              console.log(" mode edit");
              this.departementForm.get('name').setValue(this.id)
             
            },300)
           
            // patch form
          }
         
    
          
    
      
      }
    
      createForm (){
        this.departementForm = this.formBuilder.group({
          name :[null, [Validators.required ]], 
          specialite :[null, [Validators.required ]], 
          manager: [null]
    });
      }
    


    onSubmit(){
      
    if (this.mode === 'Ajouter'){
    
      console.log( this.departementForm.value)
      console.log( this.departementForm.invalid)
      this.departementService.addDepartement(this.departementForm.value).subscribe(
        data => {console.log(data)
          this.toastrService2.showToast(this.status , 'Ajout Département' , 'votre département  a été ajouté avec seccès');
          this.departementForm.reset();
          
          ;},
        err=>{},
        
      );
    }else
    {
    
    
      console.log( this.departementForm.value)
      console.log( this.departementForm.invalid)
      this.departementService. updateDepartement(this.departementForm.value , this.id).subscribe(
        data => {console.log(data)
          this.toastrService2.showToast(this.status , 'Modfier Département' , 'votre département a été  Modfier avec seccès');
          this.departementForm.reset();
          
          ;},
        err=>{},
        
      );
    }
    
      }
    
      
    //boutton : Annuler
      reset()
      {
        this.departementForm.reset();
      }
      
    
    
    //close PopUp
      closeDialog(result) {
        this.dialogRef.close(result);
      }
    
      
  

}
