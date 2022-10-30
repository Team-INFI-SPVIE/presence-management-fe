import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { EditProfessorComponent } from 'src/app/features/admin/user/professors/components/edit-professor/edit-professor.component';
import { ApiService } from 'src/app/services/api/api.service';
import { Student } from 'src/models/users.model';

@Component({
  selector: 'app-presence-modal',
  templateUrl: './presence-modal.component.html',
  styleUrls: ['./presence-modal.component.scss']
})
export class PresenceModalComponent implements OnInit {

  students!: Student[]

  constructor(
    public modalRef: MdbModalRef<PresenceModalComponent>,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.students = this.apiService.getStudents()
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  };

}
