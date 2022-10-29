import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { UserForm1 } from 'src/app/interfaces/credentials';
import { ApiService } from 'src/app/services/api/api.service';

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
  _id!: string

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
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.form.email = this.email
    this.form.first_name = this.first_name
    this.form.last_name = this.last_name
    this.form.phone = this.phone
    this.form.password = this.password
    this.form.matters = this.matters
    console.log(this._id);
    
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  };

  onSubmit() {
    this.apiService.editProfessor(this._id, this.form)
    this.close()
  }

}
