import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

  name!: string
  animal!: string


  constructor(public modalRef: MdbModalRef<ModalContentComponent>) {}

  ngOnInit() {
    console.log(this.name);
    console.log(this.animal);
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  };

}
