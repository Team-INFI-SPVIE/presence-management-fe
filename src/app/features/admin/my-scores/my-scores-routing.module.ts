import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyScoresComponent } from './my-scores/my-scores.component';

const routes: Routes = [
  { path: '', component: MyScoresComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyScoresRoutingModule { }
