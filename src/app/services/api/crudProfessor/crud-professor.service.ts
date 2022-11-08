import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, map } from 'rxjs';
import { Professor} from 'src/models/users.model';


@Injectable({
  providedIn: 'root'
})
export class CrudProfessorService {

  apiUrl: string = 'http://localhost:3000/users?role=Teacher';
  apiUrlDB: string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  isAdded: boolean = false;

  constructor(private http: HttpClient) { }

  // // Create
  create(data: any): Observable<any> {

    const professor : Professor =  {
      id:  Math.floor(Math.random() * 1000).toString(),
      picture: '',
      first_name: data.first_name,
      last_name:data.last_name,
      full_name: '',
      email:data.email,
      about: '',
      role: "Teacher",
      matters: data.matters,
      password: data.password,
      registered: Date(),
      phone: data.phone
    }
   
   
    let API_URL = `${this.apiUrlDB}`;

    return this.http.post<any>("http://localhost:3000/users", professor).pipe(map(
      (res:any) => {
        return res;
      }
    ))
   
  }


  // Read
  list() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Update
  update(id: any, data: any): Observable<any> {

    let API_URL = `${this.apiUrlDB}/${id}`;
    console.log( API_URL);

    const professor : Professor =  {
      id: id,
      picture: '',
      first_name: data.first_name,
      last_name:data.last_name,
      full_name: '',
      email:data.email,
      about: '',
      role: "Teacher",
      matters: data.matters,
      password: data.password,
      registered: Date(),
      phone: data.phone
    }

    return this.http.put(API_URL, professor, { headers: this.headers }).pipe(map(
      (res:any) => {
        return res;
      }
    ))
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
