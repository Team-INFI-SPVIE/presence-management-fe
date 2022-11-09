import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AbsenceRequestService } from 'src/app/services/absencerequests/absence-request.service';
import { AbsenceRequests } from 'src/models/users.model';

@Component({
  selector: 'app-list-of-requests',
  templateUrl: './list-of-requests.component.html',
  styleUrls: ['./list-of-requests.component.scss']
})
export class ListOfRequestsComponent implements OnInit {
  dbAbsences!: Observable<AbsenceRequests[]>;


  constructor( private absence: AbsenceRequestService) { }

  // ngOnInit(): void {
  // }

  ngOnInit(): void {
    // this.id = localStorage.getItem('id'),
    this.dbAbsences = this.absence.list()

    // console.log(this.dbAbsences);
    
  }
}
