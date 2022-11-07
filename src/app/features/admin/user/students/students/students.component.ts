import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Observable } from 'rxjs';
import { UserForm } from 'src/app/interfaces/credentials';
import { ApiService } from 'src/app/services/api/api.service';
import { Student } from 'src/models/users.model';
import { ModalContentComponent } from '../components/modal-content/modal-content/modal-content.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students!: Student[]
  students$!: Observable<Student[]>

  form: UserForm = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
  }

  modalRef: MdbModalRef<ModalContentComponent> | null = null;

  constructor(
    private modalService: MdbModalService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.students = this.apiService.getStudents()
    this.students$ = this.apiService.getAllStudent()
  }

  onSubmit(){
    this.apiService.addStudent(this.form)
    this.form.email = ''
    this.form.first_name = ''
    this.form.last_name = ''
    this.form.email = ''
    this.form.phone = ''
    this.form.password = ''
  }

  openModal(student: Student) {
    this.modalRef = this.modalService.open(ModalContentComponent, {
      data: student,
    });

    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }

  deleteStudent(id: string) {
    this.apiService.deletStudent(id)
    this.students = this.apiService.getStudents()
  }
  
}
