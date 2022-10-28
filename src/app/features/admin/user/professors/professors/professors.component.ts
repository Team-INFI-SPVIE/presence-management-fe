import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserForm1 } from 'src/app/interfaces/credentials';
import { Professor } from 'src/app/models/users.model';
import { ApiService } from 'src/app/services/api/api.service';

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
  


  constructor(  private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.professors = this.apiService.getprofessor()
  }
  onSubmit(){
    this.apiService.addprofessor(this.form)
    // this.router.navigate(["admin/user/students"])
    this.form
  }

}
