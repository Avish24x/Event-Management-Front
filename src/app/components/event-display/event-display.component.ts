import { Component } from '@angular/core';
import { BaseEvent } from '../../model/base-event.model'
@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss']
})
export class EventDisplayComponent {
  events: BaseEvent[] = [
    {
      title: 'Fun @ Worx',
      description: ' Have a good time...',
      date: 'Jan 19, 2024',
      imageUrl: 'assets/images/gaming.jpg'
    },
    {
      title: 'HR Team',
      description: 'Hire mee!!...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/donation.jpg'
    },
    {
      title: 'Payback Team',
      description: 'Donation collect ...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/fun.jpg'
    },
    {
      title: 'Fun @ Worx',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/sharingiscaring.jpg'
    },
    {
      title: 'HR Team',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/bg.jpg'
    },
    {
      title: 'Payback Team',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/guitar.jpg'
    },
    {
      title: 'Fun @ Worx',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/hiking.jpg'
    },
    {
      title: 'HR Team',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/press.jpg'
    },
    {
      title: 'Payback Team',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/bg.jpg'
    },

    // Add more events here...
  ];
}