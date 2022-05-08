import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NbComponentStatus, NbDialogRef, NbDialogService, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { Client } from '../../../model/client';
import { Collaborateur } from '../../../model/collaborateur';
import { ConstantValue } from '../../../model/constantValue';
import { Mission } from '../../../model/mission';
import { ClientService } from '../../../service/client.service';
import { CollaborateurService } from '../../../service/collaborateur.service';
import { MissionService } from '../../../service/mission.service';
import { ToastrService } from '../../../service/toastr.service';


@Component({
  selector: 'ngx-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.scss']
})
export class AddMissionComponent implements OnInit {
  missionForm: FormGroup;
  mission:Mission;
  typeSubmit ='Ajouter';
  mode ="Ajouter"

  @Input() id;
  @Input() modeView: boolean

  collaborateurList : Collaborateur[]= [];

  clientList: Client[]= [];

  
  constructor(   
    private formBuilder: FormBuilder,
    protected dialogRef: NbDialogRef<AddMissionComponent> ,
    private missionService: MissionService,
    private toastrService4:  ToastrService,
    private clientService: ClientService,
    private collaborateurService : CollaborateurService,


    ) { }

    status: NbComponentStatus = 'success';


  ngOnInit(): void {
    //pour ajouter la liste du client dans le popup du mission
    this.clientService.getAllClient().subscribe(
      rep => { this.clientList = rep ;
      console.log("list client !!",this.clientList)},
      err =>{}
       );
       
    //pour ajouter la liste du collaborateur dans le popup du mission
       this.collaborateurService.getAllCollaborateur().subscribe(
        rep => { this. collaborateurList = rep},
        err =>{}
         );

  
    {this.createForm();

      if(this.id)
      { this.typeSubmit = "Modfier"
      this.mode = "Modfier";
       setTimeout( () => {
        this.missionService.getMissionById(this.id).subscribe(

          data => { this.mission = data;

            this.missionForm.get('name').setValue(this.mission.name)
            this.missionForm.get('dateDebut').setValue(this.mission.dateDebut)
            this.missionForm.get('dateFin').setValue(this.mission.dateFin)
            this.missionForm.get('localisation').setValue(this.mission.localisation)
            this.missionForm.get('nbHeurs').setValue(this.mission.nbHeurs)
            this.missionForm.get('client').setValue(this.mission.client)
            this.missionForm.get('collaborateur').setValue(this.mission.collaborateur)




            if(this.modeView === true) {

              this.missionForm.get('name').disable()
              this.missionForm.get('dateDebut').disable()
              this.missionForm.get('dateFin').disable()
              this.missionForm.get('localisation').disable()
              this.missionForm.get('nbHeurs').disable()
              this.missionForm.get('client').disable()
              this.missionForm.get('collaborateur').disable()

           

            }}

            );
            
                      console.log("id line" , this.id);
                      console.log(" mod edit");
                      this.missionForm.get('firstName').setValue("imen 0001")
                    },300)
                   
                    // patch form
                  }
                 
              }}
            

  createForm ()
  {
    this.missionForm = this.formBuilder.group({

    name :[null, [Validators.required ,Validators.pattern(ConstantValue.ONLYTEXT_REGEX)]], 
    dateDebut:[null,[Validators.required ,Validators.pattern(ConstantValue.DATE_REGEX_SLASH)]],
    dateFin:[null,[Validators.required ,Validators.pattern(ConstantValue.DATE_REGEX_SLASH)]],
    localisation:[null, [Validators.required]],
    nbHeurs:[null,],
    client:[null, [Validators.required]],
    collaborateur:[null, [Validators.required]]





    });
  }

  onSubmit(){
     /*si le mode sera ajouter ==> on va ajouter un nouveau mission 
  et afficher une notification d'ajout avec succès
  si non on va faire une modification (update)
  */
  
  if (this.mode === 'Ajouter'){


    console.log( this.missionForm.value)
    console.log( this.missionForm.invalid)
    this.missionService.addMission(this.missionForm.value).subscribe(
      data => {console.log(data)
        this.toastrService4.showToast(this.status , 'Ajout Mission' , 'votre Mission a été ajouté avec seccès');
        this.missionForm.reset();
        
        ;},
      err=>{},
      
    );

  }
  else{
    this.missionService. updateMission(this.missionForm.value , this.id).subscribe(
      data => {console.log(data)
        this.toastrService4.showToast(this.status , 'Modfier Mission' , 'votre Mission a été  Modfié avec seccès');
        this.missionForm.reset();
        
        ;},
      err=>{},
      
    );
  }
  }



  reset()
  {
    this.missionForm.reset();
  }
  
  
  //Close d'une pop-up (X)
  closeDialog(result) {
    this.dialogRef.close(result);

    
  }




}

