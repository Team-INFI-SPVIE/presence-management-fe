import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresenceManagementComponent } from './presence-management/presence-management.component';


const routes: Routes = [
  { path: '', component: PresenceManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresenceManagementRoutingModule { }