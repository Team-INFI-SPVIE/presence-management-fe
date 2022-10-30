import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenceManagementComponent } from './presence-management/presence-management.component';
import { PresenceManagementRoutingModule } from './presence-management-routing.module';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { PresenceModalComponent } from './components/presence-modal/presence-modal/presence-modal.component';
import { PresenceComponent } from './components/presence/presence/presence.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PresenceManagementComponent,
    PresenceModalComponent,
    PresenceComponent
  ],
  imports: [
    CommonModule,
    PresenceManagementRoutingModule,
    FormsModule,
    MdbModalModule
  ]
})
export class PresenceManagementModule { }
