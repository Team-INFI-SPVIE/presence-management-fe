import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreListRoutingModule } from './score-list-routing.module';
import { ScoreListComponent } from './score-list/score-list.component';
import { ScorelistDetailComponent } from './scorelist-detail/scorelist-detail.component';


@NgModule({
  declarations: [
    ScoreListComponent,
    ScorelistDetailComponent
  ],
  imports: [
    CommonModule,
    ScoreListRoutingModule
  ]
})
export class ScoreListModule { }
