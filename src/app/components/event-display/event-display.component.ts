import { Component } from '@angular/core';
import { Event } from '../../model/event.model'
@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss']
})
export class EventDisplayComponent {
  events: Event[] = [
    {
      title: 'Event 1',
      description: 'we are here to make you have a good time...',
      date: 'Jan 19, 2024',
      imageUrl: 'assets/images/gaming.jpg'
    },
    {
      title: 'Event 2',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/donation.jpg'
    },
    {
      title: 'Event 3',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/fun.jpg'
    },
    {
      title: 'Event 4',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/sharingiscaring.jpg'
    },
    {
      title: 'Event 5',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/bg.jpg'
    },
    {
      title: 'Event 6',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/guitar.jpg'
    },
    {
      title: 'Event 7',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/hiking.jpg'
    },
    {
      title: 'Event 8',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/press.jpg'
    },
    {
      title: 'Event 9',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/bg.jpg'
    },

    // Add more events here...
  ];
}