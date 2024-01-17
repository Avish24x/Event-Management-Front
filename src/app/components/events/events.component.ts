import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-events',
  template: `
    <div>
      <h1>Events App</h1>
      <full-calendar [options]="calendarOptions"></full-calendar>
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
      { title: 'Meeting', start: new Date() },
      { title: 'Meeting', start: new Date() },
      { title: 'Meeting', start: new Date() },
      { title: 'Meeting', start: new Date() }
      // Add more events as needed
    ]
  };

  ngOnInit(): void {
    // Implement any additional initialization logic if required
  }
}
