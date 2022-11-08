import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatterRoutingModule } from './matter-routing.module';
import { MatterComponent } from './matter/matter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MatterComponent
  ],
  imports: [
    CommonModule,
    MatterRoutingModule,
    FormsModule,
  ]
})
export class MatterModule { }
