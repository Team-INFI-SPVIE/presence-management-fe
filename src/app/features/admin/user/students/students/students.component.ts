import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalContentComponent } from '../components/modal-content/modal-content/modal-content.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  // public user = {
  //   name: 'Izzat Nadiri',
  //   age: 26
  // }

  // constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // openModal() {
  //   const modalRef = this.modalService.open(ModalContentComponent);
  //   // modalRef.componentInstance.user = this.user;
  //   // modalRef.result.then((result) => {
  //   //   if (result) {
  //   //     console.log(result);
  //   //   }
  //   // });
  // }

  modalRef: MdbModalRef<ModalContentComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ModalContentComponent, {
      data: {name: 'dddddd', animal: 'eeeeee'},
    });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });

    // this.modalRef.componentInstance.user = this.user;
  }

}
