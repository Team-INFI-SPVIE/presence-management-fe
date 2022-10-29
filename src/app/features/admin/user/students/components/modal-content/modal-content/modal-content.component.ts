import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { UserForm } from 'src/app/interfaces/credentials';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

  first_name!: string
  last_name!: string
  email!: string
  phone!: string
  password!: string
  _id!: string

  form: UserForm = {
    first_name: this.first_name,
    last_name: this.last_name,
    email: this.email,
    phone: this.phone,
    password: this.password,
  }
  constructor(
    public modalRef: MdbModalRef<ModalContentComponent>,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.form.email = this.email
    this.form.first_name = this.first_name
    this.form.last_name = this.last_name
    this.form.phone = this.phone
    this.form.password = this.password
    console.log(this._id);
    
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  };

  onSubmit() {
    this.apiService.editStudent(this._id, this.form)
    this.close()
  }

}
