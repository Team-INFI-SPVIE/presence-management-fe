import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { Presence } from 'src/models/users.model';

import { StudentsPresenses } from 'src/models/users.model'; 


@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss']
})
export class ScoreListComponent implements OnInit {

  presences$!: Observable<Presence[]>

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.presences$ = this.apiService.getAllPresenses()
  }

  presences(students: StudentsPresenses[]): number {
    const presenceStudent = students.filter(s => s.is_present === true)
    return presenceStudent.length
  }

  adsences(students: StudentsPresenses[]): number {
    const presenceStudent = students.filter(s => s.is_present === false)
    return presenceStudent.length
  }

  showDetails(id: string) {
    this.router.navigate([`/admin/score-list/details/${id}`]);
  }

}
