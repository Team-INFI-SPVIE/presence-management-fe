import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyScoresRoutingModule } from './my-scores-routing.module';
import { MyScoresComponent } from './my-scores/my-scores.component';


@NgModule({
  declarations: [
    MyScoresComponent
  ],
  imports: [
    CommonModule,
    MyScoresRoutingModule
  ]
})
export class MyScoresModule { }
