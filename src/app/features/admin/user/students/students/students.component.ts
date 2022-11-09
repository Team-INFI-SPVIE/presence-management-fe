import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Observable } from 'rxjs';
import { UserForm } from 'src/app/interfaces/credentials';
import { Student } from 'src/models/users.model';
import { ModalContentComponent } from '../components/modal-content/modal-content/modal-content.component';
import { CrudStudentService } from 'src/app/services/api/crud-student/crud-student.service';
import { AuthService } from 'src/app/services/auth/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students!: Observable<Student[]>
  user!: any

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
    private router: Router,
    private crudStudent: CrudStudentService,
    private authService: AuthService

  ) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser()
    this.students = this.crudStudent.list()


    private crudStudent: CrudStudentService
  ) { }


  ngOnInit(): void {
    this.students = this.crudStudent.list()

  }

  onSubmit() {

    this.crudStudent.creates(this.form).subscribe(res => {
      this.students = this.crudStudent.list()
      this.sweetAlertSuccess()
    },
      err => {

        this.sweetAlertError()

        console.log('Err: ', + err);

      })

    this.form.email = ''
    this.form.first_name = ''
    this.form.last_name = ''
    this.form.email = ''
    this.form.phone = ''
    this.form.password = ''
  }


  deletes(id: any) {

    this.crudStudent.delete(id).subscribe((response) => {
      this.students = this.crudStudent.list();
      this.sweetAlertDelete()
    }, (error => {
    }));


  }

  sweetAlertSuccess(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ajout effectué avec succès',
      toast : true,
      showConfirmButton: false,
      timer: 1500
    })
  }

  
  sweetAlertDelete(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Suppression effectuée avec succès',
      toast : true,
      showConfirmButton: false,
      timer: 1500
    })
  }
  sweetAlertError(){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Erreur',
      toast : true,
      showConfirmButton: false,
      timer: 1500
    })
  }

  
deletes(id:any){
  this.crudStudent.delete(id).subscribe((response)=>{
   this.students= this.crudStudent.list();
  },( err =>{
    console.log('Err: ', + err);
  }));
}


  openModal(student: Student) {
    this.modalRef = this.modalService.open(ModalContentComponent, {
      data: student,
    });

    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }


  //deleteStudent(id: string) {
  // this.apiService.deletStudent(id)
  // this.students = this.apiService.getStudents()
}
  //supStudent(id: string) {

  }



