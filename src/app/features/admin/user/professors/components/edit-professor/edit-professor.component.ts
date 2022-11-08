import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { UserForm1 } from 'src/app/interfaces/credentials';
// import { ApiService } from 'src/app/services/api/api.service';
import { CrudProfessorService } from 'src/app/services/api/crudProfessor/crud-professor.service';

@Component({
  selector: 'app-edit-professor',
  templateUrl: './edit-professor.component.html',
  styleUrls: ['./edit-professor.component.scss']
})
export class EditProfessorComponent implements OnInit {

  first_name!: string
  last_name!: string
  email!: string
  phone!: string
  password!: string
  matters!: string
  id!: string

  profLists:any = [];

  form: UserForm1 = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    matters: '',
  }


  constructor(
    public modalRef: MdbModalRef<EditProfessorComponent>,
    private crudProfessor : CrudProfessorService
  ) {}

  ngOnInit() {
    this.form.email = this.email
    this.form.first_name = this.first_name
    this.form.last_name = this.last_name
    this.form.phone = this.phone
    this.form.password = this.password
    this.form.matters = this.matters
   
    localStorage.setItem('id',this.id)
    
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  };

  //professor listProf
  professorList(){
    this.crudProfessor.list().subscribe((response)=>{
      this.profLists = response;
    },(error=>{

    }));
  }
  

  onSubmit() {

    this.crudProfessor.update(localStorage.getItem('id'),this.form).subscribe(res => {
      // alert('Ok');
      this.professorList();

      this.close()
     
    },
    err => {
      alert("Non");
    })
  }

}
