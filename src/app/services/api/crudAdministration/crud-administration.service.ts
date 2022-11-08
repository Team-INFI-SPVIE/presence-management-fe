import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, map } from 'rxjs';
import { Admin } from 'src/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class CrudAdministrationService {

 
  apiUrl: string = 'http://localhost:3000/users?role=Admin';
  apiUrlDB: string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  isAdded: boolean = false;

  constructor(private http: HttpClient) { }

  // // Create
  create(data: any): Observable<any> {

    const admin : Admin =  {
      id:  Math.floor(Math.random() * 1000).toString(),
      picture: data.picture,
      first_name: data.first_name,
      last_name:data.last_name,
      full_name: '',
      email:data.email,
      about: '',
      role: "Admin",
      password: data.password,
      registered: Date(),
      phone: data.phone
    }
   
   
    let API_URL = `${this.apiUrlDB}`;

    return this.http.post<any>("http://localhost:3000/users", admin).pipe(map(
      (res:any) => {
        return res;
      }
    ))
   
  }

  getList() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Delete
  delete(id: any): Observable<any> {
    var API_URL = `${this.apiUrlDB}/${id}`;
  
    return this.http.delete(API_URL).pipe(
      catchError(this.handleError)
    )
  }

   // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
