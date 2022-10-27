import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HourLessonRoutingModule } from './hour-lesson-routing.module';
import { HourLessonComponent } from './hour-lesson/hour-lesson.component';


@NgModule({
  declarations: [
    HourLessonComponent
  ],
  imports: [
    CommonModule,
    HourLessonRoutingModule
  ]
})
export class HourLessonModule { }
