import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { UserComponent } from './user/user.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    SidemenuComponent,
    UserComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,

    
  ]
})
export class AdminModule { }
