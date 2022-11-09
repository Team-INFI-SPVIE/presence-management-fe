import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { CurrentUser, Score } from 'src/app/interfaces/credentials';
import { ApiService } from 'src/app/services/api/api.service';
import { CrudStudentService } from 'src/app/services/api/crud-student/crud-student.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Student } from 'src/models/users.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {

  scrores!: Observable<Score[]>
  presences$!: Observable<Score[]>
  students$!: Observable<Student[]>
  matter = ''
  startTime = ''
  endTime = ''

  user!: CurrentUser | null

  constructor(
    private apiService: ApiService,
    private studentService: CrudStudentService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.students$ = this.studentService.list()
    this.presences$ = this.apiService.getAllScrore()
    this.user = this.authService.getCurrentUser()
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


  onSubmit(student: Student[],) {
    this.apiService.addPresences(student, this.matter, this.startTime, this.endTime)
    this.sweetAlertSuccess()
    this.router.navigate(["admin/presence-management"])
=======
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

  onSubmit(student: Student[]) {

    this.apiService.addPresenses(student, this.matter, this.startTime, this.endTime, this.user).pipe(
      tap(() => this.router.navigate(["admin/presence-management"]))
      ).subscribe();

  }

  goBack() {
    this.router.navigate(["admin/presence-management"])
  }


  
  
  sweetAlertSuccess(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Operation effectuée avec succès',
      toast : true,
      showConfirmButton: false,
      timer: 1500
    })
  }

  

  
//   onChange(event: Event) {
//     console.log(event.target.value);
//  }


}
