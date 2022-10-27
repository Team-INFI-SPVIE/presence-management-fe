import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfRequestsModule } from './list-of-requests.module';
import { NewRequestsComponent } from './new-requests/new-requests.component';
import { RequestHistoryComponent } from './request-history/request-history.component';

const routes: Routes = [
  { path: '', component: ListOfRequestsModule  },
  // { path: 'new-requests', component: RequestHistoryComponent },
  // { path: 'request-history', component: NewRequestsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOfRequestsRoutingModule { }
