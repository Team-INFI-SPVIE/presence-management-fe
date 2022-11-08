import { Component, OnInit } from '@angular/core';
import { UserForm3 } from 'src/app/interfaces/credentials';
import { CrudAdministrationService } from 'src/app/services/api/crudAdministration/crud-administration.service';
import { Admin } from 'src/models/users.model';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  adminLists:any = [];

  form : UserForm3 = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    picture: ''
   
  }

  constructor(private crudAdmin : CrudAdministrationService) { }

  ngOnInit(): void {

    this.adminList();

    
  }

   //Admin list
  adminList(){
    this.crudAdmin.getList().subscribe((response)=>{
      this.adminLists = response;
    },(error=>{

    }));
  }

  onSubmit(){
    this.crudAdmin.create(this.form).subscribe(res => {
      this.adminList();
    },
    err => {
      alert("Non");
    })

    this.form.first_name = ''
    this.form.last_name = ''
    this.form.email = ''
    this.form.phone = ''
    this.form.password = ''
    this.form.picture = ''
   
  }

  openModal(admin: Admin){

  }

  deleteAdmin(id: string){
    this.crudAdmin.delete(id).subscribe(res => {
      
      this.adminList();
    },
    err => {
      alert("Non");
    })
  }

}
