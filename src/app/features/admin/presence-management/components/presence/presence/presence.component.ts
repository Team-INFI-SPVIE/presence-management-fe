import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.router.navigate(["admin/presence-management"])
  }

  goBack() {
    this.router.navigate(["admin/presence-management"])
  }

  
//   onChange(event: Event) {
//     console.log(event.target.value);
//  }

}
