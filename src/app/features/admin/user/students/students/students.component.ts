import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { UserForm } from 'src/app/interfaces/credentials';
import { Student } from 'src/app/models/users.model';
import { ApiService } from 'src/app/services/api/api.service';
import { ModalContentComponent } from '../components/modal-content/modal-content/modal-content.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  modalRef: MdbModalRef<ModalContentComponent> | null = null;

  students!: Student[]

  form: UserForm = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
  }

  constructor(
    private modalService: MdbModalService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.students = this.apiService.getStudents()
  }

  onSubmit(){
    this.apiService.addStudent(this.form)
    // this.router.navigate(["admin/user/students"])
  }

  openModal() {
    this.modalRef = this.modalService.open(ModalContentComponent, {
      data: {name: 'dddddd', animal: 'eeeeee'},
    });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });

  }

}
