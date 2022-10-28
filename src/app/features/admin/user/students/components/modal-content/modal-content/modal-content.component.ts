import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

  data: any


  constructor(public modalRef: MdbModalRef<ModalContentComponent>) {}

  ngOnInit() {
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  };

}
