import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudStudentService } from 'src/app/services/api/crud-student/crud-student.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user!: any
  student!: any

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService,
    private crudStudentService : CrudStudentService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser()
    this.student = this.crudStudentService.list()
  }

  logOut(): void {
    this.tokenService.clearToken()
    this.router.navigate(["/"])
  }

}
