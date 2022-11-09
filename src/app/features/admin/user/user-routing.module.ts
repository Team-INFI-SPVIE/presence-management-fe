import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrators/administrator/administrator.component';

import { ProfessorsComponent } from './professors/professors/professors.component';
import { StudentsComponent } from './students/students/students.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'professors', component: ProfessorsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'administrators', component: AdministratorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
