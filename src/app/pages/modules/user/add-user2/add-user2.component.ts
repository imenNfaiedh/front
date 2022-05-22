import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbDialogRef } from '@nebular/theme';
import { ConstantValue } from '../../../model/constantValue';
import { User } from '../../../model/user';
import { ToastrService } from '../../../service/toastr.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'ngx-add-user2',
  templateUrl: './add-user2.component.html',
  styleUrls: ['./add-user2.component.scss']
})
export class AddUser2Component implements OnInit {
userForm: FormGroup;
typeSubmit ='Ajouter';
mode ="Ajouter"
user:User;
  @Input() id;
  @Input() modeView: boolean;


  constructor(
    protected dialogRef: NbDialogRef<AddUser2Component> ,
    private formBuilder: FormBuilder ,
    private userService: UserService,
    private toastrService2:  ToastrService,




  ) { }

  status: NbComponentStatus = 'success';


  ngOnInit(): void {

    this.createForm();


      if(this.id)
      {
        this.typeSubmit = "Modfier"
        this.mode = "Modfier";
         setTimeout( () => {
           this.userService.getUserById(this.id).subscribe(
             data =>{ this.user = data ;
              this.userForm.get('firstName').setValue(this.user.firstName)
              this.userForm.get('lastName').setValue(this.user.lastName)
              this.userForm.get('userName').setValue(this.user.userName)
              this.userForm.get('password').setValue(this.user.password)


              if(this.modeView === true) {


                this.userForm.get('firstName').disable()
                this.userForm.get('lastName').disable()
                this.userForm.get('userName').disable()
                this.userForm.get('password').disable()
              }
             }
           );

           console.log("id line" , this.id);
           console.log(" mode edit");
           this.userForm.get('firstName').setValue(this.id)
          
         },300)

  }

    }

  createForm (){ 
    this.userForm = this.formBuilder.group({
      firstName :[null, [Validators.required ,Validators.pattern(ConstantValue.ONLYTEXT_REGEX)]], 
      lastName : [null, [Validators.required, Validators.pattern(ConstantValue.ONLYTEXT_REGEX)]], 
      userName: [null, [Validators.required, Validators.pattern(ConstantValue.ONLYTEXT_REGEX)]],
      password:[null, [Validators.required]],
  });
}


 

  onSubmit(){
  
    if (this.mode === 'Ajouter'){
      //this.markAsDirty()
    
      console.log( this.userForm.value)
      console.log( this.userForm.invalid)
      this.userService.addUser(this.userForm.value).subscribe(
        data => {console.log(data)
          this.toastrService2.showToast(this.status , 'Ajout Utilisateur' , 'Un utilisateur a été ajouté avec seccès');
          this.userForm.reset();
          
          ;},
        err=>{},
        
      );
        }
        else{

          console.log( this.userForm.value)
  console.log( this.userForm.invalid)
  this.userService. updateUser(this.userForm.value , this.id).subscribe(
    data => {console.log(data)
      this.toastrService2.showToast(this.status , 'Modfier Utilisateur' , 'votre Utilisateur a été  Modfier avec seccès');
      this.userForm.reset();
      
      ;},
    err=>{},
    
  );
}

        }
      






      //markAsDirty() {
       // this.userForm.get('firstName').markAsDirty();
      
     // }

     reset()
  {
    this.userForm.reset();
  }


    
  closeDialog(result) {
    this.dialogRef.close(result);
  }


}
