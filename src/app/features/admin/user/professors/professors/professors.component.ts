import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { UserForm1 } from 'src/app/interfaces/credentials';
import { ApiService } from 'src/app/services/api/api.service';
import { Professor } from 'src/models/users.model';
import { EditProfessorComponent } from '../components/edit-professor/edit-professor.component';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
export class ProfessorsComponent implements OnInit {

  professors! : Professor []

  form : UserForm1 = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    matters: '',
  }

  modalRef: MdbModalRef<EditProfessorComponent> | null = null;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private modalService: MdbModalService,
  ) { }

  ngOnInit(): void {
    this.professors = this.apiService.getprofessors()
  }

  onSubmit(){
    this.apiService.addprofessor(this.form)
    console.log(this.form); 
  }

  openModal(professor: Professor) {
    this.modalRef = this.modalService.open(EditProfessorComponent, {
      data: professor,
    });
  }

  deleteProfessor(id: string) {
    this.apiService.deletProfessor(id)
    this.professors = this.apiService.getprofessors()
  }

}
