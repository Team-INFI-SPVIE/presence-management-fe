import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Presence, StudentsPresenses } from 'src/models/users.model';
// import { PresenceModalComponent } from '../components/presence-modal/presence-modal/presence-modal.component';
// import { Presence } from 'src/models/users.model';



@Component({
  selector: 'app-presence-management',
  templateUrl: './presence-management.component.html',
  styleUrls: ['./presence-management.component.scss']
})
export class PresenceManagementComponent implements OnInit {

  
  user!: any
  // modalRef: MdbModalRef<PresenceModalComponent> | null = null;
  presences!: Presence[]
  lastPresences$!:Observable<Presence>
  

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

  // constructor(
  //   // private modalService: MdbModalService,
  //   private apiService: ApiService,
  //   private authService: AuthService
  // ) { }

  // ngOnInit(): void {
  //   this.user = this.authService.getCurrentUser()
  //   // this.presences = this.apiService.getPresences()
  //   this.studentsPresenses = this.apiService.getstudentsPresenses()
  //   // console.log(this.apiService.getstudentsPresenses());
    
  // }

  // openModal(professor: any) {
  //   this.modalRef = this.modalService.open(PresenceModalComponent, {
  //     data: professor,
  //   });
  // }

  // getValueFromSelect(selectedCategory: any) {
  //   console.log(selectedCategory);
    

  // lastPresences$!: Observable<Presence>

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.lastPresences$ = this.apiService.getLatestPresense();
    this.user = this.authService.getCurrentUser()
  }

  

}


