import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { Presence } from 'src/models/users.model';

@Component({
  selector: 'app-scorelist-detail',
  templateUrl: './scorelist-detail.component.html',
  styleUrls: ['./scorelist-detail.component.scss']
})
export class ScorelistDetailComponent implements OnInit {

  id!: string
  presence$!: Observable<Presence>

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.presence$ = this.apiService.getPresenceById(this.id)
  }

}
