import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { AdministratorComponent } from './administrators/administrator/administrator.component';
import { ProfessorsComponent } from './professors/professors/professors.component';
import { StudentsComponent } from './students/students/students.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';



@NgModule({
  declarations: [  
    UserFormComponent, AdministratorComponent, ProfessorsComponent, StudentsComponent, HeaderComponent,
  ],
  imports: [ CommonModule, UserRoutingModule, ],
  providers: [],
})

export class UserModule {}
