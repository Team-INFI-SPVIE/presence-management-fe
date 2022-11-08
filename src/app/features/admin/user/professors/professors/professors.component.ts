import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { UserForm1 } from 'src/app/interfaces/credentials';
import { ApiService } from 'src/app/services/api/api.service';
import { CrudProfessorService } from 'src/app/services/api/crudProfessor/crud-professor.service';
import { Professor } from 'src/models/users.model';
import { EditProfessorComponent } from '../components/edit-professor/edit-professor.component';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
export class ProfessorsComponent implements OnInit {

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
    private crudProfessor: CrudProfessorService
  ) { }

  ngOnInit(): void {
    // this.professors = this.apiService.getprofessors()

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
      alert('Ok');
      this.professorList();
    },
    err => {
      alert("Non");
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
      alert('Ok');
      this.professorList();
    },
    err => {
      alert("Non");
    })
   
  }

  openModal(professor: Professor) {
    this.modalRef = this.modalService.open(EditProfessorComponent, {
      data: professor,
    });
  }

}
