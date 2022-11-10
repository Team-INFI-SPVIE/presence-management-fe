import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CrudMatterService } from 'src/app/services/api/crudMatter/crud-matter.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Matter } from 'src/models/users.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-matter',
  templateUrl: './matter.component.html',
  styleUrls: ['./matter.component.scss']
})
export class MatterComponent implements OnInit {
  user!: any
  matterList: any = [];

  form : Matter = {
    id:'',
    name: '',
    nameAdmin: '',
    registered: '',
   
  }

  modalRef: MdbModalRef<MatterComponent> | null = null;

  constructor(
    private router: Router,
    private crudMatter: CrudMatterService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.getMatterList()
    this.user = this.authService.getCurrentUser()
    this.matterList = this.crudMatter.getMatterAll()


    //console.log(localStorage.getItem('profile'));
    
  }


  //professor listProf
  getMatterList() {
    this.crudMatter.getMatterAll().subscribe((response) => {
      this.matterList = response;
    }, (error => {

    }));
  }

  

  onSubmit(){

    this.crudMatter.create(this.form).subscribe(res => {
      this.sweetAlertSuccess()
      this.getMatterList()
    },
    err => {
     this.sweetAlertError()
    })

    this.form.name = ''

  }

  deleteMatter(id: string) {
    this.crudMatter.delete(id).subscribe(res => {
      this.sweetAlertDelete()
      this.getMatterList();
    },
    err => {
      this.sweetAlertError()
    })
   
  }

  
  sweetAlertSuccess(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ajout effectué avec succès',
      toast : true,
      showConfirmButton: false,
      timer: 1500
    })
  }

  
  sweetAlertDelete(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Suppression effectuée avec succès',
      toast : true,
      showConfirmButton: false,
      timer: 1500
    })
  }
  sweetAlertError(){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Erreur',
      toast : true,
      showConfirmButton: false,
      timer: 1500
    })
  }


}


