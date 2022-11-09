import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUser } from 'src/app/interfaces/credentials';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Presence, StudentsPresenses } from 'src/models/users.model';

@Component({
  selector: 'app-my-scores',
  templateUrl: './my-scores.component.html',
  styleUrls: ['./my-scores.component.scss'],
})
export class MyScoresComponent implements OnInit {
  user!: CurrentUser | null;
  presences$!: Observable<Presence[]>;

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.presences$ = this.apiService.getAllPresenses();
    console.log(this.user);
  }

  checkStudentPresnce(students: StudentsPresenses[]) {
    const studentArr = students.filter(
      (student: StudentsPresenses) => student.id === this.user?.id
    );

    return studentArr[0].is_present === true;
  }
}
