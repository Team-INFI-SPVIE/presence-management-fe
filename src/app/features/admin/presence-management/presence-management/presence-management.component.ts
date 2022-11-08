import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { Presence } from 'src/models/users.model';

@Component({
  selector: 'app-presence-management',
  templateUrl: './presence-management.component.html',
  styleUrls: ['./presence-management.component.scss']
})
export class PresenceManagementComponent implements OnInit {

  lastPresences$!: Observable<Presence>

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.lastPresences$ = this.apiService.getLatestPresense();
  }

}
