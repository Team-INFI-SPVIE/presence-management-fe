import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPregenceComponent } from './components/edit-pregence/edit-pregence.component';
import { PresenceComponent } from './components/presence/presence/presence.component';
import { PresenceManagementComponent } from './presence-management/presence-management.component';


const routes: Routes = [
  { path: '', component: PresenceManagementComponent },
  { path: 'presence', component: PresenceComponent },
  { path: 'presence/:id', component: EditPregenceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresenceManagementRoutingModule { }