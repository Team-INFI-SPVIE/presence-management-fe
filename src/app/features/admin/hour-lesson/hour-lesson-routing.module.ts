import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HourLessonComponent } from './hour-lesson/hour-lesson.component';

const routes: Routes = [
  { path: '', component: HourLessonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HourLessonRoutingModule { }
