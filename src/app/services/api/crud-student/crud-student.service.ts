import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, map } from 'rxjs';
import { Student } from 'src/models/users.model';

@Injectable({
  providedIn: 'root',
})
export class CrudStudentService {
  apiUrl: string = 'http://localhost:3000/users?role=Student';
  apiUrlDB: string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  isAdded: boolean = false;

  constructor(private http: HttpClient) {}

  creates(data: any): Observable<any> {
    const student: Student = {
      id: data.id,
      picture: '',
      first_name: data.first_name,
      last_name: data.last_name,
      full_name: '',
      email: data.email,
      role: 'Student',
      password: data.password,
      registered: Date(),
      phone: data.phone,
      is_present: false,
    };

    let API_URL = `${this.apiUrlDB}`;

    return this.http.post<any>('http://localhost:3000/users', student).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  list(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/users?role=Student');
  }

  delete(id: any): Observable<any> {
    var API_URL = `${this.apiUrlDB}/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.handleError));
  }

  update(id: any, data: any): Observable<any> {
    let API_URL = `${this.apiUrlDB}/${id}`;

    const student: Student = {
      id: data.id,
      picture: '',
      first_name: data.first_name,
      last_name: data.last_name,
      full_name: '',
      email: data.email,
      role: 'Student',
      password: data.password,
      registered: Date(),
      phone: data.phone,
      is_present: false,
    };

    return this.http.put(API_URL, student, { headers: this.headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}

function list() {
  throw new Error('Function not implemented.');
}
