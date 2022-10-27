import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from 'src/app/interfaces/credentials';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL: string = `https://reqres.in/api/login`

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<any>{
    return this.http.post(this.baseURL, credentials)
  }
}
