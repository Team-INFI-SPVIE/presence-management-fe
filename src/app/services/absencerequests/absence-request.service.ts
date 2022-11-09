import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, map } from 'rxjs';
import { AbsenceRequests} from 'src/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class AbsenceRequestService {
  apiUrl: string = 'http://localhost:3000/absence-request';
  apiUrlDB: string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { 


  }

  creates(data : any): Observable <AbsenceRequests> {

    const absence: AbsenceRequests =  {
      id: data.id ,
      object:data.object,
      date: data.date,
      startTime: data.startTime,
      endTime: data.endTime,
      message: data.message,
      name: '',
      status: data.status,
      piecejointe:data.piecejointe
    }
  
   let API_URL = `${this.apiUrlDB}`;
  
      return this.http.post<any>("http://localhost:3000/absence-request", absence).pipe(map(
        (res:any) => {
          return res;
        }
      ))

}


list(): Observable<AbsenceRequests[]> {
  return this.http.get<AbsenceRequests[]>('http://localhost:3000/absence-request');
}




}