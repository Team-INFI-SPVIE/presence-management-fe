import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { Presence, Student } from 'src/models/users.model';

@Component({
  selector: 'app-edit-pregence',
  templateUrl: './edit-pregence.component.html',
  styleUrls: ['./edit-pregence.component.scss']
})
export class EditPregenceComponent implements OnInit {

  presence$!: Observable<Presence>

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.presence$ = this.apiService.getPresenceById(id)
  }

  onSubmit(student: Student[],) {

    // this.apiService.addPresenses(student, this.matter, this.startTime, this.endTime).pipe(
    //   tap(() => this.router.navigate(["admin/presence-management"]))
    //   ).subscribe();
  }

  goBack() {
    this.router.navigate(["admin/presence-management"])
  }

}
