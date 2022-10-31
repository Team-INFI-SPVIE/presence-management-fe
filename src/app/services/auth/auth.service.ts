import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from 'src/app/interfaces/credentials';
import { from, Observable, tap } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

type NewType = string;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // baseURL: NewType = `https://reqres.in/api/login`;


  // constructor(private http: HttpClient) { }

  // login(credentials: Credentials): Observable<any>{
  //   return this.http.post(this.baseURL, credentials).pipe(
  //     tap(data => {
  //       localStorage.setItem('user', JSON.stringify(data));
  //     })
  //   )
  // }

  // get currentUser(): any {
  //   const user = localStorage.getItem('user');

  //   if (user) {
  //     return JSON.parse(user);
  //   }

  //   return null;
  // }

  constructor(
   private http: HttpClient, private router: Router
  ) { }

  login(email: string, password: string){
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        // return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
        return a.email === email && a.password === password 
      });

      if(user){
      //  alert(user.role);
        // this.loginForm.reset()
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(["admin/dashboard"]) 
      }else{
        // alert('user not found');
        // this.loginForm.reset()
      this.router.navigate(["auth/login"])
      }
    },err=>{
      alert("Something went wrong")
    })
  }

  getCurrentUser(): any {
      const user = localStorage.getItem('user');
  
      if (user) {
        return JSON.parse(user);
      }
  
      return null;
    }

  logout() {
    localStorage.removeItem('user')
  }
}
