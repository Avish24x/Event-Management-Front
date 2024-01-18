import { Component } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent {
  supportTickets: { sender: string; message: string }[] = [];
  urgentMessages: { sender: string; message: string }[] = [];

  markAsUrgent(ticket: { sender: string; message: string }): void {
    // Logic to mark a support ticket as urgent and send a message to group leaders
    this.urgentMessages.push({
      sender: ticket.sender,
      message: `Urgent: ${ticket.message}`
    });
  }
}
