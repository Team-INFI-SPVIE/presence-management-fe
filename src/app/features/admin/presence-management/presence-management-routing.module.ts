import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresenceComponent } from './components/presence/presence/presence.component';
import { PresenceManagementComponent } from './presence-management/presence-management.component';


const routes: Routes = [
  { path: '', component: PresenceManagementComponent },
  { path: 'presence', component: PresenceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresenceManagementRoutingModule { }