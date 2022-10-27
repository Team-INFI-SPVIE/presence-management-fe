import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfRequestsComponent } from './list-of-requests.component';
import { ListOfRequestsModule } from './list-of-requests.module';


const routes: Routes = [
  { path: '', component: ListOfRequestsComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOfRequestsRoutingModule { }
