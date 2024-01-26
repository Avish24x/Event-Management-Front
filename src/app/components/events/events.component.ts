import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-events',
  template: `
    <div class="container">
      <h1>Events Calendar</h1>
      <full-calendar class="custom-calendar" [options]="calendarOptions"></full-calendar>
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
      { title: 'Ofc Meeting', start: new Date() },
      { title: 'Event 1', start: '2024-01-25T10:00:00' },
      { title: 'Event 2', start: '2024-01-26T14:30:00' },
      { title: 'Event 3', start: '2024-01-27T08:45:00' },
      { title: 'Event 4', start: '2024-01-28T18:00:00' },
      { title: 'Event 5', start: '2024-01-29T12:15:00' },
      { title: 'Conference', start: '2024-02-05T09:30:00' },
      { title: 'Workshop', start: '2024-02-10T14:00:00' },
      { title: 'Training Session', start: '2024-02-15T11:45:00' },
      { title: 'Project Kickoff', start: '2024-02-20T10:30:00' },
      { title: 'Team Building', start: '2024-02-25T15:45:00' },
      { title: 'Event 6', start: '2024-03-02T13:00:00' },
      { title: 'Event 7', start: '2024-03-07T16:30:00' },
      { title: 'Event 8', start: '2024-03-12T09:15:00' },
      { title: 'Event 9', start: '2024-03-17T17:00:00' },
      { title: 'Event 10', start: '2024-03-22T12:45:00' },
      // Add more events as needed
    ]
  };

  ngOnInit(): void {
    // Implement any additional initialization logic if required
  }
}
