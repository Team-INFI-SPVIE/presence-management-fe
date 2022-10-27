import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatterRoutingModule } from './matter-routing.module';
import { MatterComponent } from './matter/matter.component';


@NgModule({
  declarations: [
    MatterComponent
  ],
  imports: [
    CommonModule,
    MatterRoutingModule
  ]
})
export class MatterModule { }
