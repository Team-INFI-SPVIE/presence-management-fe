import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenceManagementComponent } from './presence-management/presence-management.component';
import { PresenceManagementRoutingModule } from './presence-management-routing.module';



@NgModule({
  declarations: [
    PresenceManagementComponent,
  ],
  imports: [
    CommonModule,
    PresenceManagementRoutingModule
  ]
})
export class PresenceManagementModule { }
