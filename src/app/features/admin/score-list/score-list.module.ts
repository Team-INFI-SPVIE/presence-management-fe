import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreListRoutingModule } from './score-list-routing.module';
import { ScoreListComponent } from './score-list/score-list.component';


@NgModule({
  declarations: [
    ScoreListComponent
  ],
  imports: [
    CommonModule,
    ScoreListRoutingModule
  ]
})
export class ScoreListModule { }
