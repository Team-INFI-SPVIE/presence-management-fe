import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceRequestRoutingModule } from './absence-request-routing.module';
import { AbsenceRequestComponent } from './absence-request/absencerequest.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AbsenceRequestComponent],
  imports: [CommonModule, AbsenceRequestRoutingModule, FormsModule],
})
export class AbsenceRequestModule {}
