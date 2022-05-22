import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule,
   NbInputModule, NbMenuModule, NbSelectModule, NbToastrModule, NbTooltipModule, NbWindowModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CollaborateurComponent } from './modules/collaborateur/collaborateur.component';
import { DepartementComponent } from './modules/departement/departement.component';
import { ClientComponent } from './modules/client/client.component';
import { MissionComponent } from './modules/mission/mission.component';
import { ManagerComponent } from './modules/manager/manager.component';
import { AddClientComponent } from './modules/client/add-client/add-client.component';
import { AddManagerComponent } from './modules/manager/add-manager/add-manager.component';
import { AddCollaborateurComponent } from './modules/collaborateur/add-collaborateur/add-collaborateur.component';
import { AddMissionComponent } from './modules/mission/add-mission/add-mission.component';
import { ActionClientComponent } from './modules/client/action-client/action-client.component';
import { ActionCollaborateurComponent } from './modules/collaborateur/action-collaborateur/action-collaborateur.component';
import { ActionManagerComponent } from './modules/manager/action-manager/action-manager.component';
import { ActionMissionComponent } from './modules/mission/action-mission/action-mission.component';
import { AddDepartementComponent } from './modules/departement/add-departement/add-departement.component';
import { ActionDepartementComponent } from './modules/departement/action-departement/action-departement.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './modules/user/user.component';
//import { AddUserComponent } from './modules/user/add-user/add-user.component';
import { ActionUserComponent } from './modules/user/action-user/action-user.component';
import { AddUser2Component } from './modules/user/add-user2/add-user2.component';
//import { BasicAuthenticationService } from './service/login/basic-authentification.service';
//import { HardcodedAuthentificationService } from './service/login/hardcoded-authentification.service';
//import { HttpInterceptorBasicAuthService } from './service/login/http-interceptor-basic-auth.service';
//import { RouteGuardService } from './service/login/route-guard.service';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ReactiveFormsModule,
    ThemeModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDialogModule.forRoot(),
    NbDialogModule.forChild(),
    NbWindowModule.forRoot(),
    NbWindowModule.forChild(),
    NbToastrModule.forRoot( ),
    NbSelectModule,
    NbTooltipModule,
    FormsModule,
    NbSelectModule,
  ],
  declarations: [
    PagesComponent,
    CollaborateurComponent,
    DepartementComponent,
    ClientComponent,
    MissionComponent,
    ManagerComponent,
    AddManagerComponent,
    AddClientComponent,
    AddCollaborateurComponent,
    AddMissionComponent,
    ActionClientComponent,
    ActionCollaborateurComponent,
    ActionManagerComponent, 
    ActionMissionComponent,
    AddDepartementComponent,
    ActionDepartementComponent,
    UserComponent,
    //AddUserComponent,
    ActionUserComponent,
    AddUser2Component,
  ],
  providers :[
    //BasicAuthenticationService,
    //HardcodedAuthentificationService,
    //HttpInterceptorBasicAuthService,
    //RouteGuardService
  ],
})
export class PagesModule {
}
