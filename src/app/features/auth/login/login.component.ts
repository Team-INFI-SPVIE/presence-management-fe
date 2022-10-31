import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/interfaces/credentials';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

    public loginForm!: FormGroup

    constructor(
      private formbuilder: FormBuilder,private http: HttpClient, private router: Router
    ) { }

  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
      });

      if(user){
        // alert('Login Succesful');
        this.loginForm.reset()
      this.router.navigate(["admin/dashboard"]) 
      }else{
        // alert('user not found');
        this.loginForm.reset()
      this.router.navigate(["auth/login"])
      }
    },err=>{
      alert("Something went wrong")
    })

  }

}
