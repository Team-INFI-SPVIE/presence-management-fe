import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { UserForm4 } from 'src/app/interfaces/credentials';
import { AbsenceRequestService } from 'src/app/services/absencerequests/absence-request.service';
import { AbsenceRequests } from 'src/models/users.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-absence-request',
  templateUrl: './absence-request.component.html',
  styleUrls: ['./absence-request.component.scss']
})
export class AbsenceRequestComponent implements OnInit {

absence!: Observable<AbsenceRequests[]>






  form: UserForm4= {
    object: '',
  
  startTime: '',
  endTime: '',
  message: '',
  piecejointe: ''
  

  }

   modalRef: MdbModalRef<AbsenceRequestComponent> | null = null;

  constructor(private router:Router, 
    private absences: AbsenceRequestService
) { }

  ngOnInit(): void {

this.absence= this.absences.list()

  }

  onSubmit() {

    this.absences.creates(this.form).subscribe(res => {
      this.absence = this.absences.list()
    },
      err => {
        alert("Non");



      })

      this.form.object = ''
      this.form.startTime = ''
      this.form.endTime = ''
      this.form.message = ''
      this.form.piecejointe= ''
      

}
}