import { Component, OnInit } from '@angular/core';
import { UserForm4 } from 'src/app/interfaces/credentials';
import { AbsenceRequestService } from 'src/app/services/absencerequests/absence-request.service';
import { AbsenceRequests } from 'src/models/users.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-absence-request',
  templateUrl: './absence-request.component.html',
  styleUrls: ['./absence-request.component.scss'],
})
export class AbsenceRequestComponent implements OnInit {
  absence!: Observable<AbsenceRequests[]>;
  public textareaValue = '';

  doTextareaValueChange(ev: any) {
    try {
      this.textareaValue = ev.target.value;
    } catch (e) {
      console.info('could not set textarea-value');
    }
  }

  form: UserForm4 = {
    object: '',
    startTime: '',
    endTime: '',
    message: '',
    piecejointe: '',
    date: new Date(),
  };

  constructor(
    private router: Router,
    private absences: AbsenceRequestService
  ) {}

  ngOnInit(): void {
    this.absence = this.absences.list();
  }

  onSubmit() {
    this.absences.creates(this.form).subscribe(
      () => {
        this.absence = this.absences.list();
      },
      (err) => {
        console.log('Error creating: ', err);
      }
    );

    this.form.object = '';
    this.form.startTime = '';
    this.form.endTime = '';
    this.form.message = '';
    this.form.piecejointe = '';
  }

  onStartTimeSelected(value: any): void {
    this.form.startTime = value;
  }

  onEndTimeSelected(value: string): void {
    this.form.endTime = value;
  }
}
