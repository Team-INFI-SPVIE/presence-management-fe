import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from 'src/app/interfaces/credentials';
import { ApiService } from 'src/app/services/api/api.service';


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
