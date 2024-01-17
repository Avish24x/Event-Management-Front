import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-events',
  template: `
    <div class="container">
      <h1>Events Calender</h1>
      <full-calendar class="custom-calender" [options]="calendarOptions"></full-calendar>
    </div>
  `,
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() },
      { title: 'Bot Meeting', start: new Date() },
      { title: 'Not Meeting', start: new Date() },
      { title: 'Yes Meeting', start: new Date() },
      { title: 'Ofc Meeting', start: new Date() }
      // Add more events as needed
    ]
  };

  ngOnInit(): void {
    // Implement any additional initialization logic if required
  }
}
