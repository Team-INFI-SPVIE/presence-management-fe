import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/interfaces/credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    this.http.get<any>('http://localhost:3000/users').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          localStorage.setItem('profile', a.first_name);

          return a.email === email && a.password === password;
        });

        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['admin/dashboard']);
        } else {
          this.router.navigate(['auth/login']);
        }
      },
      (err) => {
        alert('Something went wrong');
        console.log('Error: ', err);
      }
    );
  }

  getCurrentUser(): CurrentUser | null {
    const user = localStorage.getItem('user');

    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
