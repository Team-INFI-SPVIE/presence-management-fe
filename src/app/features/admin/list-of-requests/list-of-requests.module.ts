import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOfRequestsRoutingModule } from './list-of-requests-routing.module';
import { NewRequestsComponent } from './new-requests/new-requests.component';
import { RequestHistoryComponent } from './request-history/request-history.component';
import { ListOfRequestsComponent } from './list-of-requests.component';


@NgModule({
  declarations: [
    NewRequestsComponent,
    RequestHistoryComponent,
    ListOfRequestsComponent,
  ],
  imports: [
    CommonModule,
    ListOfRequestsRoutingModule
  ]
})
export class ListOfRequestsModule { }
