import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
})
export class EventRegistrationComponent {
  fromDate!: NgbDateStruct;
  typeOfContracts = [
    { id: 'P', name: 'Permanent' },
    { id: 'T', name: 'Temporary' },
    { id: 'R', name: 'Replacement' },
  ];
  selectedContract = 'P';
  submitted: boolean = false;

  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
  }

  submitForm(): void {
    this.submitted = true;
  }
}
