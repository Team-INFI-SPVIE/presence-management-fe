import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { AdministratorComponent } from './administrators/administrator/administrator.component';
import { ProfessorsComponent } from './professors/professors/professors.component';
import { StudentsComponent } from './students/students/students.component';
import { ModalContainerComponent } from './students/components/modal-container/modal-container/modal-container.component';
import { ModalContentComponent } from './students/components/modal-content/modal-content/modal-content.component';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { EditProfessorComponent } from './professors/components/edit-professor/edit-professor.component';



@NgModule({
  declarations: [  
    UserFormComponent, AdministratorComponent, ProfessorsComponent, StudentsComponent, ModalContainerComponent, ModalContentComponent, EditProfessorComponent, 
  ],
  imports: [ CommonModule, UserRoutingModule, FormsModule, MdbModalModule ],
  providers: [],
})

export class UserModule {}
