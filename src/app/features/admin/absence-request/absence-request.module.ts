import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceRequestRoutingModule } from './absence-request-routing.module';
import { AbsenceRequestComponent } from './absence-request/absence-request.component';



@NgModule({
  declarations: [
    AbsenceRequestComponent,
    

  ],
  imports: [
    CommonModule,
    AbsenceRequestRoutingModule
  ]
})
export class AbsenceRequestModule { }
