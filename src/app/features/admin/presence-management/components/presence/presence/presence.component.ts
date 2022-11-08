import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Score } from 'src/app/interfaces/credentials';
import { ApiService } from 'src/app/services/api/api.service';
import { Presence, Student } from 'src/models/users.model';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {

  students!: Student[]
  presences!: Presence[]
  scrores!: Observable<Score[]>
  presences$!: Observable<Score[]>
  matter = ''
  startTime = ''
  endTime = ''



  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.students = this.apiService.getStudents()
    this.presences = this.apiService.getPresences()

    this.students.map((students: Student) => students.is_present = false)

    this.presences$ = this.apiService.getAllScrore();
    
  }

  onSelected(value:string): void {
    this.matter = value;
  }

  onStartTimeSelected(value:string): void {
    this.startTime = value;
  }

  onEndTimeSelected(value:string): void {
    this.endTime = value;
  }


  onCheckboxValueChange(student: Student){
    student.is_present = ! student.is_present
  }

  onCheckAllStudent(students: Student[]){
    const verifyCheckdAll = this.verifyCheckd(students)
    if (verifyCheckdAll) {
      students.map(
        (student: Student) => student.is_present = false
      )
    } else {
      students.map(
        (student: Student) => student.is_present = true
      )
    }
  }

  verifyCheckd(students: Student[]) {
    const allCheck = students.filter((student: Student) => student.is_present === true)

    return allCheck.length === students.length
  }

  disabledButton(): boolean {
    return this.matter === '' || this.startTime === '' || this.endTime === ''
  }

  onSubmit(student: Student[],) {

    this.apiService.addPresenses(student, this.matter, this.startTime, this.endTime).pipe(
      tap(() => this.router.navigate(["admin/presence-management"]))
      ).subscribe();
  }

  goBack() {
    this.router.navigate(["admin/presence-management"])
  }

}
