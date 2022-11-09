import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AdministratorComponent } from './administrators/administrator/administrator.component';
import { ProfessorsComponent } from './professors/professors/professors.component';
import { StudentsComponent } from './students/students/students.component';
import { ModalContentComponent } from './students/components/modal-content/modal-content/modal-content.component';
import { FormsModule } from '@angular/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { EditProfessorComponent } from './professors/components/edit-professor/edit-professor.component';

@NgModule({
  declarations: [  
    UserFormComponent,
    AdministratorComponent,
    ProfessorsComponent,
    StudentsComponent,
    ModalContentComponent,
    EditProfessorComponent,  
  ],
  imports: [ CommonModule, UserRoutingModule, FormsModule, MdbModalModule ],
  providers: [],
})

export class UserModule {}
