import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { CurrentUser, Score } from 'src/app/interfaces/credentials';
import { Presence, Student, StudentsPresenses } from 'src/models/users.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/users?role=Student');
  }

  getAllPresenses(): Observable<Presence[]> {
    return this.http.get<Presence[]>('http://localhost:3000/score');
  }

  getLatestPresense(): Observable<Presence> {

    let id!: string
    return this.getAllPresenses().pipe(
         map(resences => {
          id = resences[resences.length - 1].id
         }),
        switchMap(() => this.http.get<Presence>(`http://localhost:3000/score/${id}`))
    );
  }

  getPresenceById(presenceId: string): Observable<Presence> {
    return this.http.get<Presence>(`http://localhost:3000/score/${presenceId}`);
  }

  addPresenses(
    students: Student[],
    matter: string,
    startTime: string,
    endTime: string,
    user: CurrentUser | null,
    ): Observable<Presence> {

    const s: StudentsPresenses[] = students.map((s: Student) => {
      return {
        id: s.id,
        first_name: s.first_name,
        last_name: s.last_name,
        email: s.email,
        is_present: s.is_present,
        role: s.role,
        phone: s.phone,
        date: new Date
      }
    })

    const presence : Presence =  {
      id: Math.floor(Math.random() * 1000).toString(),
      createdAt: new Date,
      matter,
      startTime,
      endTime,
      professor: `${user?.first_name} - ${user?.last_name}`,
      studentsPresenses: s
    }

    return this.getAllPresenses().pipe(
      switchMap( () => this.http.post<Presence>(
        'http://localhost:3000/score',
        presence
      ))
    );
  }

  updatePresence(presenceId: string): Observable<Presence> {
    return this.getPresenceById(presenceId).pipe(
        switchMap((data) => this.http.put<Presence>(
            `'http://localhost:3000/score'/${presenceId}`,
            data)
        )
    );
}

  getAllScrore(): Observable<Score[]> {
    return this.http.get<Score[]>('http://localhost:3000/score');
  }

}
