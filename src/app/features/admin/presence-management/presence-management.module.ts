import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenceManagementComponent } from './presence-management/presence-management.component';
import { PresenceManagementRoutingModule } from './presence-management-routing.module';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { PresenceComponent } from './components/presence/presence/presence.component';
import { FormsModule } from '@angular/forms';
import { EditPregenceComponent } from './components/edit-pregence/edit-pregence.component';



@NgModule({
  declarations: [
    PresenceManagementComponent,
    PresenceComponent,
    EditPregenceComponent
  ],
  imports: [
    CommonModule,
    PresenceManagementRoutingModule,
    FormsModule,
    MdbModalModule
  ]
})
export class PresenceManagementModule { }
