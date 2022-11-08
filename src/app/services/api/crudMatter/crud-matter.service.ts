import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, map } from 'rxjs';
import { Admin, Matter } from 'src/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class CrudMatterService {

  apiUrl: string = 'http://localhost:3000/matter';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  isAdded: boolean = false;

  constructor(private http: HttpClient) { }

  // Create
  create(data: any): Observable<any> {

    const matter : Matter =  {
      id:  Math.floor(Math.random() * 1000).toString(),
      name: data.name,
      nameAdmin: localStorage.getItem('profile') ? localStorage.getItem('profile') : "Admin" ,
      registered: Date(),
    }
  
   
    let API_URL = `${this.apiUrl}`;

    return this.http.post<any>("http://localhost:3000/matter", matter).pipe(map(
      (res:any) => {
        return res;
      }
    ))
   
  }


  // Read
  getMatterAll() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Update
  // update(id: any, data: any): Observable<any> {

  //   let API_URL = `${this.apiUrlDB}/${id}`;
  //   console.log( API_URL);

  //   const matter : Matter =  {
  //     id: id,
  //     name: data.matters,
  //     idAdmin: localStorage.getItem("id")
  //     registered: Date(),
  //   }

  //   return this.http.put(API_URL, professor, { headers: this.headers }).pipe(map(
  //     (res:any) => {
  //       return res;
  //     }
  //   ))
  // }

  // Delete
  delete(id: any): Observable<any> {
    var API_URL = `${this.apiUrl}/${id}`;
  
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
