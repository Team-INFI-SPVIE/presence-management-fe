import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CrudMatterService } from 'src/app/services/api/crudMatter/crud-matter.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Matter } from 'src/models/users.model';

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
    alert('Ok');
    this.crudMatter.create(this.form).subscribe(res => {
  
      this.getMatterList();
    },
    err => {
      alert("Non");
    })

    this.form.name = ''

  }

  deleteMatter(id: string) {
    this.crudMatter.delete(id).subscribe(res => {
      alert('Ok');
      this.getMatterList();
    },
    err => {
      alert("Non");
    })
   
  }


}


