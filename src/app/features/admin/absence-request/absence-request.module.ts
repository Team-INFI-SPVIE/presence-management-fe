import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceRequestRoutingModule } from './absence-request-routing.module';
import { AbsenceRequestComponent } from './absence-request/absencerequest.component';
import { FormsModule } from '@angular/forms';
import { AbsenceRequestService } from 'src/app/services/absencerequests/absence-request.service';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AbsenceRequestComponent],
  imports: [CommonModule, AbsenceRequestRoutingModule, FormsModule],
})
export class AbsenceRequestModule {}
