import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOfRequestsRoutingModule } from './list-of-requests-routing.module';
import { ListOfRequestsComponent } from './list-of-requests.component';


@NgModule({
  declarations: [
    ListOfRequestsComponent,
  ],
  imports: [
    CommonModule,
    ListOfRequestsRoutingModule
  ]
})
export class ListOfRequestsModule { }
