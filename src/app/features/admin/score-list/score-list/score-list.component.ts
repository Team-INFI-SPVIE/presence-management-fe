import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { Score } from 'src/models/users.model';


@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss']
})
export class ScoreListComponent implements OnInit {

  scrores!: Observable<Score[]>

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {

    this.scrores = this.apiService.getAllScrore()
  }

}
