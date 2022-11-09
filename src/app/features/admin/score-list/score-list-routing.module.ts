import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreListComponent } from './score-list/score-list.component';
import { ScorelistDetailComponent } from './scorelist-detail/scorelist-detail.component';

const routes: Routes = [

  { path: '', component: ScoreListComponent },
  { path: 'details/:id', component: ScorelistDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreListRoutingModule { }
