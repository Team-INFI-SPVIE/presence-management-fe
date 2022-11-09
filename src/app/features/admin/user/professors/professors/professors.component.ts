import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { UserForm1 } from 'src/app/interfaces/credentials';
import { ApiService } from 'src/app/services/api/api.service';
import { CrudProfessorService } from 'src/app/services/api/crudProfessor/crud-professor.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Professor } from 'src/models/users.model';
import { EditProfessorComponent } from '../components/edit-professor/edit-professor.component';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
export class ProfessorsComponent implements OnInit {

  user!: any

  professors! : Professor []

  profLists:any = [];

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
    // private apiService: ApiService,
    private router: Router,
    private modalService: MdbModalService,
    private crudProfessor: CrudProfessorService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // this.professors = this.apiService.getprofessors()
    this.user = this.authService.getCurrentUser()
    this.professorList();
  }
  //professor listProf
  professorList(){
    this.crudProfessor.list().subscribe((response)=>{
      this.profLists = response;
    },(error=>{

    }));
  }
  
 

  onSubmit(){
   
    this.crudProfessor.create(this.form).subscribe(res => {
      this.sweetAlertSuccess()
      this.professorList()
    },
    err => {
     this.sweetAlertError()
    })

    this.form.first_name = ''
    this.form.last_name = ''
    this.form.email = ''
    this.form.phone = ''
    this.form.password = ''
    this.form.matters = ''
  }

 
  deleteProfessor(id: string) {
    this.crudProfessor.delete(id).subscribe(res => {
     this.sweetAlertDelete()
      this.professorList();
    },
    err => {
      this.sweetAlertError()
    })
   
  }

  openModal(professor: Professor) {
    this.modalRef = this.modalService.open(EditProfessorComponent, {
      data: professor,
    });
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


}
