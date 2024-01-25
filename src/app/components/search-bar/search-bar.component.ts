import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery: string = '';
  isClosed: boolean = true;
  isExpanded: boolean = false;

  @Output() searchEvent = new EventEmitter<string>();

  search() {
    this.searchEvent.emit(this.searchQuery);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Toggle Chatbox
  toggleChatbox() {
    this.isClosed = !this.isClosed;
  }

  onClose() {
    // Placeholder: Implement logic to close or clean up resources here
    // For example, set isClosed to true or perform necessary actions
    this.isClosed = true;
  }

  onClick() {
    // Placeholder: Implement logic for handling suggestions here
    // For example, toggle the isExpanded state or perform specific actions
    this.isExpanded = !this.isExpanded;
  }
}
