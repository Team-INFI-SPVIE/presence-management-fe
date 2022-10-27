import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsenceRequestComponent } from './absence-request/absence-request.component';


const routes: Routes = [
  { path: '', component: AbsenceRequestComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbsenceRequestRoutingModule { }
