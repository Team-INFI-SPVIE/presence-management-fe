import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUser } from 'src/app/interfaces/credentials';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Presence, StudentsPresenses } from 'src/models/users.model';
@Component({
  selector: 'app-presence-management',
  templateUrl: './presence-management.component.html',
  styleUrls: ['./presence-management.component.scss'],
})
export class PresenceManagementComponent implements OnInit {
  user!: CurrentUser | null;
  presences!: Presence[];
  lastPresences$!: Observable<Presence>;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.lastPresences$ = this.apiService.getLatestPresense();
    this.user = this.authService.getCurrentUser();
  }
}
