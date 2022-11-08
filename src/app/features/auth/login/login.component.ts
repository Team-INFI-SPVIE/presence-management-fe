import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/interfaces/credentials';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  submitted = false;


  constructor(
    private formbuilder: FormBuilder,private http: HttpClient, private router: Router,
    private authService: AuthService
  ) { }

ngOnInit(): void {

  this.loginForm = this.formbuilder.group({
    email: new FormControl (null,[ Validators.required, Validators.email]),
    password: new FormControl (null,[ Validators.required]),

  })
}

get f(): { [key: string]: AbstractControl } {
  return this.loginForm.controls;
}

login(){

  this.submitted = true;
  this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
  this.loginForm.reset()

}



}
