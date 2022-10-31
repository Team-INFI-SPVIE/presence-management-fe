import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ApiService } from 'src/app/services/api/api.service';
import { Presence, StudentsPresenses } from 'src/models/users.model';
import { PresenceModalComponent } from '../components/presence-modal/presence-modal/presence-modal.component';

@Component({
  selector: 'app-presence-management',
  templateUrl: './presence-management.component.html',
  styleUrls: ['./presence-management.component.scss']
})
export class PresenceManagementComponent implements OnInit {

  modalRef: MdbModalRef<PresenceModalComponent> | null = null;
  presences!: Presence[]
  

  studentsPresenses!: StudentsPresenses[] | any

  categories = [
    {
      id: 1,
      name: "Angular"
    },
    {
      id: 2,
      name: "React"
    },
    {
      id: 3,
      name: "Vue"
    }
  ]

  picture = "https://bigdataci.net/storage/photos/0UKpM7a15oI11obrDqyqtKwDMh9PLdLSgmCb4Hw6.png"

  constructor(
    private modalService: MdbModalService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.presences = this.apiService.getPresences()
    this.studentsPresenses = this.apiService.getstudentsPresenses()
    console.log(this.apiService.getstudentsPresenses());
    
  }

  openModal(professor: any) {
    this.modalRef = this.modalService.open(PresenceModalComponent, {
      data: professor,
    });
  }

  getValueFromSelect(selectedCategory: any) {
    console.log(selectedCategory);
    
  }

}
