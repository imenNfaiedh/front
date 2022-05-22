import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AddDepartementComponent } from './modules/departement/add-departement/add-departement.component';
import { AddMissionComponent } from './modules/mission/add-mission/add-mission.component';
import { AddCollaborateurComponent } from './modules/collaborateur/add-collaborateur/add-collaborateur.component';
import { AddClientComponent } from './modules/client/add-client/add-client.component';
import { AddManagerComponent } from './modules/manager/add-manager/add-manager.component';
import { MissionComponent } from './modules/mission/mission.component';
import { ManagerComponent } from './modules/manager/manager.component';
import { DepartementComponent } from './modules/departement/departement.component';
import { ClientComponent } from './modules/client/client.component';
import { CollaborateurComponent } from './modules/collaborateur/collaborateur.component';
import { UserComponent } from './modules/user/user.component';
import { AddUser2Component } from './modules/user/add-user2/add-user2.component';

import { Login2Component } from '../login2/login2.component';
import { RouteGuardService } from '../route-gurad.service';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: CollaborateurComponent,
      canActivate: [RouteGuardService]
    },
    {
      path: 'list-of-collaborateur',
      component:  CollaborateurComponent,
      canActivate: [RouteGuardService]
    },
    {
      path: 'list-of-client',
      component:   ClientComponent,
      canActivate: [RouteGuardService]
    },
    {
      path: 'list-of-departement',
      component:   DepartementComponent,
      canActivate: [RouteGuardService]
    },
    {
      path: 'list-of-manager',
      component:   ManagerComponent,
      canActivate: [RouteGuardService]
    },
    {
      path: 'list-of-mission',
      component:   MissionComponent,
      canActivate: [RouteGuardService]
    },
    {
      path: 'list-of-user',
      component:   UserComponent,
      canActivate: [RouteGuardService]
    },
    {
      path: 'add-manager',
      component:    AddManagerComponent,
      canActivate: [RouteGuardService]
    },
    {
      path: 'add-client',
      component:    AddClientComponent,
      canActivate: [RouteGuardService]
    },
    {
      path: 'add-collaborateur',
      component:    AddCollaborateurComponent,
      canActivate: [RouteGuardService]
    },
    {
    path: 'add-mission',
    component:    AddMissionComponent,
    canActivate: [RouteGuardService]
    },
    {
      path: 'add-departement',
      component:    AddDepartementComponent,
      canActivate: [RouteGuardService]
    },
    {
      path: 'add-user',
      component:    AddUser2Component,
      canActivate: [RouteGuardService]
    },
    
    
    
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
      canActivate: [RouteGuardService]
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
